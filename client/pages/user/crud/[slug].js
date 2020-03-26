import Layout from '../../../components/layout';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
     
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogUpdate />
                        </div>
                    </div>
                </div>
        
        </Layout>
    );
};

export default Blog;