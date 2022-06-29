import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import { blogPosts } from "./utils/sampleBlogs";
import AllBlogs from "./components/AllBlogs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path="all" element={<AllBlogs blogPosts={blogPosts} />} />
            <Route
              path=":blogId"
              element={<BlogPost blogPosts={blogPosts} />}
            />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

//  * Nest a new route under the "/blogs" route, the path should be ":blogId", the element should be <BlogPost/>
export default App;
