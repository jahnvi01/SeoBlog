import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import dynamic from 'next/dynamic';
import { getCategories, create } from '../../actions/category';
import { createBlog } from '../../actions/blog';
import { getTags } from '../../actions/tag';

const ReactQuill=dynamic(()=>import('react-quill'),{ssr:false})
import '../../node_modules/react-quill/dist/quill.snow.css'
// import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';
const CreateBlog = ({router}) => {
    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };
    const token = getCookie('token');
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [body, setBody] = useState(blogFromLS());

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    });
    const { error, sizeError, success, formData, title, hidePublishButton } = values;
  useEffect(()=>{
      setValues({...values,formData:new FormData()});
      initCategories();
      initTags();
  },[router])
    const publishBlog=(e)=>{
      e.preventDefault()
      console.log(formData.get('categories'))
      createBlog(formData, token).then(data => {
        if (data.error) {
            console.log(data.error)
            setValues({ ...values, error: data.error });
        } else {
            setValues({ ...values, title: '', error: '', success: `A new blog titled "${data.title}" is created` });
            setBody('');
            setCategories([]);
            setTags([]);
        }
    });
  }
  const handleToggle = c => () => {
    setValues({ ...values, error: '' });
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
        all.push(c);
    } else {
        all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set('categories', all);
    console.log(formData.get('categories'))
};
const handleTagsToggle = t => () => {
    setValues({ ...values, error: '' });
    // return the first index or -1
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
        all.push(t);
    } else {
        all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set('tags', all);
};
  const handleChange=name=>e=>{
console.log(e.target.value)
const value=name==="photo"?e.target.files[0]:e.target.value;
formData.set(name,value)
setValues({...values,[name]:value,formData,error:""})
  }
  const initCategories = () => {
    getCategories().then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setCategories(data);
        }
    });
};

const initTags = () => {
    getTags().then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setTags(data);
        }
    });
};
const showCategories = () => {
    return (
        categories &&
        categories.map((c, i) => (
            <li key={i} className="list-unstyled">
                <input type="checkbox" onChange={handleToggle(c._id)} className="mr-2" />
                <label className="form-check-label">{c.name}</label>
            </li>
        ))
    );
};

const showTags = () => {
    return (
        tags &&
        tags.map((t, i) => (
            <li key={i} className="list-unstyled">
                <input type="checkbox" onChange={handleTagsToggle(t._id)} className="mr-2" />
                <label className="form-check-label">{t.name}</label>
            </li>
        ))
    );
};
  const handleBody=e=>{
    setBody(e);
    formData.set('body', e);
    if (typeof window !== 'undefined') {

        localStorage.setItem('blog', JSON.stringify(e));
    }
      }
      const showError=()=>(
          <div className="alert-alert-danger" style={{display:error?'':'none'}}>{error}</div>
      )
      const showSuccess=()=>(
        <div className="alert-alert-success" style={{display:success?'':'none'}}>{success}</div>
    )
 const CreateBlogForm=()=>{
     return(
         <form onSubmit={publishBlog}>
<div className="form-group">
    <label className="text-muted">Title</label>
    <input type="text" className="form-control" onChange={handleChange('title')}/>
</div>
<div className="form-group">
 <ReactQuill modules={CreateBlog.modules} formats={CreateBlog.formats} value={body} placeholder="write something..." onChange={handleBody} />
</div>

<div className="form-group">
 <button type="submit" className="btn-btn-primary">Publish</button>
</div>
         </form>
     )
 }
  
    return (
         <div className="container-fluid">
                <div className="row">
                <div className="col-md-8">

               {showError()}
               {showSuccess()}
            {CreateBlogForm()} 
         
        </div>
        <div className="col-md-4">
        <div>

<div>
<div className="form-group pb-2">
                            <h5>Featured image</h5>
                            <hr />

                            <small className="text-muted">Max size: 1mb</small>
                            <label className="btn btn-outline-info">
                                Upload featured image
                                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                            </label>
                        </div>
</div>

                        <h5>Categories</h5>
                        <hr />

                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
                    </div>
                    <div>
                        <h5>Tags</h5>
                        <hr />
                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
                    </div>
    
</div>

        </div>
        </div>
    );
};
CreateBlog.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};
 
CreateBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];
export default CreateBlog;