 
import Layout from '../components/layout';
import Link from 'next/link';
import SignupComponent from '../components/auth/signupcomponent'
const Signup = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-8 offset-md-2">
            <h2 style={{textAlign:"center",padding:"2%",fontWeight:"bold"}}>Signup page</h2>
          <SignupComponent />
          </div>
          </div>
        </Layout>
    );
};

export default Signup;