import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const BlogPost = ({ blogPosts }) => {
  let params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));

  return (
    <div>
      <p>Id: {blog.id} </p>
      <h4>Title: {blog.title}</h4>
      <p>Author: {blog.author}</p>
      <p>Text: {blog.text}</p>
      <p>Date created: {blog.createdAt}</p>
    </div>
  );
};

export default BlogPost;

//  * The BlogPost component should get the blog ID from the useParams() hook and display that blog on the page.
