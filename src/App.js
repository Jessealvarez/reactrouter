import "./App.css";
import { Route, Routes } from "react-router-dom";
//components
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";
//pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SubmitBlog from "./pages/SubmitBlog";
//utilities
import { blogPosts } from "./utils/sampleBlogs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route index element={<AllBlogs blogPosts={blogPosts} />} />
            <Route
              path=":blogId"
              element={<BlogPost blogPosts={blogPosts} />}
            />
            <Route path="submit-blog" element={<SubmitBlog />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

//  * Nest a new route under the "/blogs" route, the path should be ":blogId", the element should be <BlogPost/>
export default App;
