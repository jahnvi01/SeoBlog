import Layout from '../../../components/layout';

import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';
import { isAuth } from '../../../actions/auth';

const Blog = () => {
    const username = isAuth() && isAuth().username;
    return (
        <Layout>
          
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogRead username={username} />
                        </div>
                    </div>
                </div>
       
        </Layout>
    );
};

export default Blog;