 
import Layout from '../components/layout';
import Link from 'next/link';
import SignupComponent from '../components/auth/signupcomponent'
const Signup = () => {
    return (
        <Layout>
            <h2>Signup page</h2>
          <SignupComponent />
        </Layout>
    );
};

export default Signup;