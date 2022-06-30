import React from "react";
//useSearchParams lets this take input from the URL searchbar
import { useSearchParams } from "react-router-dom";

//passed {blogPosts} into <Allblogs /> as =PROPS= so it can be accessed here
export default function AllBlogs({ blogPosts }) {
  //console.log({ blogPosts });
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const sortField = searchParams.get("sortField") || "createdAt";

  const SortedBlogs = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
    }
    return 0;
  };

  return (
    <>
      All blogs:
      <ul>
        {blogPosts.sort(SortedBlogs).map((blog, index) => {
          //don't forget "return" just spent a day wondering why this wouldn't render the list
          return (
            <li key={index}>
              <p className="blog-elements">Id: {blog.id} </p>
              <p className="blog-elements">Title: {blog.title}</p>
              <p className="blog-elements">Author: {blog.author}</p>
              <p className="blog-elements">Text: {blog.text}</p>
              <p className="blog-elements">Date created: {blog.createdAt}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
