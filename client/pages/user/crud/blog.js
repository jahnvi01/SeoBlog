import Layout from '../../../components/layout';
import BlogCreate from '../../../components/crud/blogcreate';
import Link from 'next/link';

const CreateBlog = () => {
    return (
        <Layout>
            
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
         
        </Layout>
    );
};

export default CreateBlog;