import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Slide from "./pages/Slide";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/slide' element={<Slide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
