 
import Layout from '../components/layout';
import Link from 'next/link';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/signincomponent'
const Signin = ({ router }) => {
  const showRedirectMessage = () => {
      if (router.query.message) {
          return <div className="alert alert-danger">{router.query.message}</div>;
      } else {
          return;
      }
  };

  return (
        <div className="row">
        <div className="col-md-8 offset-md-2">
    <h2 style={{textAlign:"center",padding:"2%",fontWeight:"bold"}}>Signin page</h2>
    <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>

  <SigninComponent />
  </div>
  </div>
    );
};

export default withRouter(Signin);