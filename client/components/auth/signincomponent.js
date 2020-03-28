import {useState,useEffect} from 'react'
import {signin,authentication,isAuth} from '../../actions/auth'
import Link from 'next/link';
import Router from 'next/router';
//import LoginGoogle from './LoginGoogle';
const SigninComponent=()=>{
const [values,setValues]=useState({
name:'',
email:'',
password:'',
loading:false,
message:'',
error:'',
showForm:true
    })
    useEffect(()=>{
        isAuth() && Router.push('/'),[]
    })
    const {email,password,loading,message,error,showForm}=values;
const handleSubmit=(e)=>{
e.preventDefault();
setValues({...values,loading:true,error:false})
const user={email,name,password}
signin(user)
.then(data=>{ 
    if(data.error){
        setValues({...values,error:data.error,loading:false})
    }      
    else{
console.log(data)
        authentication(data,()=>{
          if(isAuth() && isAuth.role===1){
          
          Router.push('/admin');
}
            else{
Router.push('/user')
            }
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
    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="type your email" />
</div>
<div className='form-group'>
    <input  value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="type your password" />
</div>
<button className="btn-btn-primary">Signin</button>
{/* <LoginGoogle /> */}
<Link href="/auth/password/forget">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link>
  </form>
  </React.Fragment>
)
}
export default SigninComponent;