import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogList } from "../../../config/data";
import "./BlogPage.css";
import Footer2 from "../../../components/Footer2/Footer2";
import SearchBar from "../../../components/Searchbar/SearchBar";
import BP_Section2 from "./Section2/BP_Section2";
import Navbar from "../../../components/Navbar/Navbar";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  console.log(id);

  return (
    <>
      <Navbar />
      {blog ? (
        <div className="BP-outerDIV">
          <div className="BP_section1_mainContainer">
            <div className="BP_section1_textContainer">
              <h1 className="BP_section1_textContainer-Text1">{blog.title}</h1>
            </div>
          </div>
          <div className="BP_section2_mainContainer">
            <div className="BP_section2_subContainer1">
              <img
                className="BP_Section2Img"
                src={blog.cover}
                alt=""
                srcset=""
              />
              <div className="BP_Section2-mainDesc">{blog.description_BP}</div>
              <div className="BP_Section2-head1">{blog.head1}</div>
              <div className="BP_Section2-subDesc">
                {blog.description_head1}
              </div>
              {/* 3 PARA SECTION */}
              <div className="BP_Section2-subDesc">
                {blog.description_head1_P1}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head1_P2}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head1_P3}
              </div>
              {/* SECOND HEADING */}
              <div className="BP_Section2-head1">{blog.head2}</div>
              <div className="BP_Section2-subDesc">
                {blog.description_head2}
              </div>
              {/* 3 PARA SECTION */}
              <div className="BP_Section2-subDesc">
                {blog.description_head2_P1}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head2_P2}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head2_P3}
              </div>
              {/* THIRD HEADING */}
              <div className="BP_Section2-head1">{blog.head3}</div>
              <div className="BP_Section2-subDesc">
                {blog.description_head3}
              </div>
              {/* 3 PARA SECTION */}
              <div className="BP_Section2-subDesc">
                {blog.description_head3_P1}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head3_P2}
              </div>
              <div className="BP_Section2-subDesc">
                {blog.description_head3_P3}
              </div>

              {/* POINTS SECTION */}
              <div className="BP_Section2-pointHead">{blog.point_head}</div>

              <div className="BP_Section2-points">
                {blog.points.map((point, i) => (
                  <div key={i}>
                    <div className="BP_Section2-point-container">
                      <span>&#8226;</span>
                      <div className="BP_Section2-point">{point}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="BP_section2_subContainer2">
              <BP_Section2 />
            </div>
          </div>
        </div>
      ) : (
        // <EmptyList />
        <p>Noting found</p>
      )}
      <Footer2 />
    </>
  );
};

export default BlogPage;
