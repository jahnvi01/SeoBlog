import {useState} from 'react'

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
console.log("handle submit")
}
const handleChange=name=>(e)=>{
    setValues({...values,
        error:false,
        [name]:e.target.value
    })
console.log(e.target.value);
}
    return (
        <React.Fragment>
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