import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/layout';
import { singleBlog, listRelated } from '../../actions/blog';
import { useState, useEffect } from 'react';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';

const SingleBlog = ({ blog ,query}) => {
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
              //  console.log(data)
            }
        });
    };
    const showRelatedBlog = () => {
      //  console.log(blog)
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };
    useEffect(() => {
        loadRelated();
    }, []);
    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <React.Fragment>
                        {head()}

            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                            <section>
                                <div className="row" style={{ marginTop: '-30px' }}>
                                    <img
                                        src={`${API}/api/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"
                                    />
                                </div>
                            </section>

                            <section>
                                <p className="lead mt-3 mark">
                                <Link href={`/profile/${blog.postedBy.username}`}>
                    <a className="float-right">{blog.postedBy.username}</a>
                </Link> | Published {moment(blog.updatedAt).fromNow()}
                                </p>

                                <div className="pb-3">
                                    {showBlogCategories(blog)}
                                    {showBlogTags(blog)}
                                    <br />
                                    <br />
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                            </section>
                        </div>

                        <div className="container">
                            <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
                            <hr />
                            <div className="row">{showRelatedBlog()}</div>
                        </div>

                        <div className="container pb-5">
                            <p>show comments</p>
                        </div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data,query:query };
        }
    });
};

export default SingleBlog;