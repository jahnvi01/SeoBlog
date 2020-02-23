import Layout from '../../../components/layout';
import Link from 'next/link';
import {isAuth} from '../../../actions/auth'
import Admin from '../../../components/auth/admin'
import Category from '../../../components/crud/category'
import Tag from '../../../components/crud/tag'
import {useEffect} from 'react';
const CategoryTag = () => {
    return (
        <Layout>

          {/* <Admin>  */}
          <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5"> <h2>Manage Categories and Tags</h2></div>
                    <div className="col-md-6">
                    <ul className="list-group">
 
<Category />
</ul>
                    </div>
                    <div className="col-md-6">

                    <ul className="list-group">
 
 <Tag />
 </ul>
                    </div>
                </div>
                          
                </div>
          
                {/* </Admin> */}
        </Layout>
    );
};

export default CategoryTag;

