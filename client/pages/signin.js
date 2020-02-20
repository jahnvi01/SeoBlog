 
import Layout from '../components/layout';
import Link from 'next/link';
import SigninComponent from '../components/auth/signincomponent'
const Signin = () => {
    return (
        <div className="row">
        <div className="col-md-8 offset-md-2">
    <h2 style={{textAlign:"center",padding:"2%",fontWeight:"bold"}}>Signin page</h2>
  <SigninComponent />
  </div>
  </div>
    );
};

export default Signin;