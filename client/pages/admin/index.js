import Layout from '../../components/layout';
import Link from 'next/link';
import {isAuth} from '../../actions/auth'
import Admin from '../../components/auth/admin'
import {useEffect} from 'react';
const adminIndex = () => {
    return (
        <Layout>
          {/* <Admin>  */}
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5"> <h2>adminIndex page</h2></div>
                    <div className="col-md-4">
                    <ul className="list-group">
  <li className="list-group-item"><Link href='/admin/crud/category-tag'><a>Create category</a></Link></li>
  <li className="list-group-item"><Link href='/admin/crud/category-tag'><a>Create tag</a></Link></li>
  <li className="list-group-item"><Link href='/admin/crud/blog'><a>Create blog</a></Link></li>
  <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                
                                </li>

</ul>
                    </div>
                    <div className="col-md-8"></div>
                </div>
                          
           
          
                {/* </Admin> */}
        </Layout>
    );
};

export default adminIndex;

