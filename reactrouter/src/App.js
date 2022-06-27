import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
