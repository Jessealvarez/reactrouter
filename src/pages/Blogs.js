import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Blogs({ blogPosts }) {
  return (
    <div>
      <Navbar />
      <h1>Blogs</h1>

      <Outlet />
    </div>
  );
}

// * Add the <Outlet> react-router component to the <Blogs> component to display the <BlogPost/> component to the /blogs page.
//         * I.E. localhost:3000/blogs/1 should display the blog with id === 1 to the blogs page.
