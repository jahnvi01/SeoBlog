import {useState} from 'react'
import {signup} from '../../actions/auth'
const SignupComponent=()=>{
    const [values,setValues]=useState({
name:'',
email:'',
password:'',
loading:false,
message:'',
error:'',
showForm:true
    })
    const {email,password,name,loading,message,error,showForm}=values;
const handleSubmit=(e)=>{
e.preventDefault()
setValues({...values,loading:true,error:false})
const user={email,name,password}
signup(user)
.then(data=>{
    if(data.error){
        setValues({...values,error:data.error,loading:false})
    }
    else{
        setValues({
            ...values,
            name:'',
            email:'',
            password:'',
            error:'',
            loading:false,
            message:data.message,
            showForm:false
        })
    }
})
}
const handleChange=name=>(e)=>{
    setValues({...values,
        error:false,
        [name]:e.target.value
    })
console.log(e.target.value);
}

const showLoading=()=>(loading?<div className="alert alert-info">Loading...</div>:'')
const showError=()=>(error?<div className="alert alert-danger">{error}</div>:'')
const showMessage=()=>(message?<div className="alert alert-info">{message}</div>:'')
    return (
        <React.Fragment>
            {showLoading()}
            {showMessage()}
            {showError()}
  <form onSubmit={handleSubmit}>
<div className='form-group'>
    <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="type your name" />
</div>
<div className='form-group'>
    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="type your email" />
</div>
<div className='form-group'>
    <input  value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="type your password" />
</div>
<button className="btn-btn-primary">Signup</button>
  </form>
  </React.Fragment>
)
}
export default SignupComponent;