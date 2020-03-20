import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import { API } from '../../config';
import moment from 'moment';
import Card from '../../components/blog/card'
//import renderHTML from 'react-render-html';

const Blogs = (blogs,categories,tags,size) => {
    const showAllBlogs = () => {
      console.log(blogs)
        blogs=blogs.blogs
    
        return blogs.map((blog, i) => 
        {
            // ()
            return (
                <article key={i}>
               <Card blog={blog}/>
                    <hr />
                </article>
            );
        });
    };

  
    return (
        <Layout>
            <main>
                <div className="container-fluid">
                    <header>
                        <div className="col-md-12 pt-3">
                            <h1 className="display-4 font-weight-bold text-center">Programming blogs and tutorials</h1>
                        </div>
                        <section>
                            <p>show categories and tags</p>
                        </section>
                    </header>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-12">{showAllBlogs()}</div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};
Blogs.getInitialProps = () => {
    return listBlogsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log("data");
        } else {
          console.log(data)
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                size: data.size
            };
        }
    });
};
export default Blogs; 