import React from 'react';
import Layout from "../../components/layout";
import BlogCard from "../../components/blogCard";
import fetchBlogs from '../helpers/fetch-blogs';
import '../../styles/globals.css'

const BlogHomePage = async() => {
    const blogs = await fetchBlogs();
    console.log(blogs)
    return (
        <Layout>
            <div>
                <h1>lil blog</h1>
            </div>
            {blogs.data.map((blog) => (
                <BlogCard key={blog.id} title={blog.attributes.Title} country = {blog.attributes.Category} date={blog.attributes.publishedAt} link={`/blog/${blog.attributes.slug}`}/>
            ))}
        </Layout>
    );
};


export default BlogHomePage;