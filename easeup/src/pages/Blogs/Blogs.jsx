import React from "react";
import Footer from "../../components/Footer/Footer";
import B_Section2 from "./Section 2/B_Section2";
import B_Section1 from "./Section1/B_Section1";
import "./Blogs.css";
// import {blogList} from '../../Config/data'
import Navbar from "../../components/Navbar/Navbar";
const Blogs = ({ blogs }) => {
  return (
    <>
      <Navbar />
      <B_Section1 />
      <div className="blog-wrap">
        {/* <B_Section2/> */}
        {blogs.map((blog) => (
          <B_Section2 blog={blog} key={blog.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
