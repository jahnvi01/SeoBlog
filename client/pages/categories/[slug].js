import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import renderHTML from 'react-render-html';
import Card from '../../components/blog/card';

const Category = ({ category, blogs }) => {
    console.log(category)
    return (
        <React.Fragment>
           <Layout>
                <main>
                    <div className="container-fluid text-center">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                                {blogs.map((b, i) => (
                                    <div>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error); 
        } else {
            console.log(data.category)
            return { category: data.category, blogs: data.blogs };
        }
    });
};

export default Category;