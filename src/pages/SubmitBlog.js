import React from "react";
import { useState } from "react";
import { blogPosts } from "../utils/sampleBlogs";

const SubmitBlog = () => {
  const [blogTitle, setBlogTitle] = useState("test-title");
  const [blogText, setBlogText] = useState("test-description");
  const [blogAuthor, setBlogAuthor] = useState("test-author");

  return (
    <>
      <label>Blog Title</label>
      <input
        id="title"
        type="text"
        value="title"
        onChange={(e) => {
          const value = e.target.value;
          setBlogTitle(value);
        }}
      />
      &nbsp;
      {/* <label>Blog Text</label>
      <input id="text" size="300" type="text" /> */}
      <label>Blog Author</label>
      <input
        id="author"
        type="text"
        value="author"
        onChange={(e) => {
          const value = e.target.value;
          setBlogAuthor(value);
        }}
      />
      &nbsp;
      <label>Blog Text</label>
      <textarea
        onChange={(e) => {
          const value = e.target.value;
          setBlogText(value);
        }}
      />
      &nbsp;
      <button
        onClick={() => {
          const newBlogId = blogPosts.length + 1;
          const newBlogEntry = {
            id: newBlogId,
            createdAt: new Date().toDateString(),
            blogTitle,
            blogAuthor,
            blogText,
          };
          blogPosts.push(newBlogEntry);
          console.log(blogPosts);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SubmitBlog;
