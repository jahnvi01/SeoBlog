import Layout from '../../../components/layout';
import Link from 'next/link';
import {isAuth} from '../../../actions/auth'
import Admin from '../../../components/auth/admin'
import CreateBlog from '../../../components/crud/blogcreate'
import {useEffect} from 'react';
const Blog = () => {
    return (
        <Layout>

          {/* <Admin>  */}
          <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5"> <h2>Manage Blogs</h2></div>
                    <div className="col-md-6">
                    <ul className="list-group">
 
<CreateBlog />
</ul>
                    </div>
                    <div className="col-md-6">

  
                    </div>
                </div>
                          
                </div>
          
                {/* </Admin> */}
        </Layout>
    );
};

export default Blog;

