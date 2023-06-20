import React, { useState } from "react";
import { blogList } from "../../../../config/data";
import SearchBar from "../../../../components/Searchbar/SearchBar";
import BlogList from "../BlogList/BlogList";
import ContactUsDiv from "../../../../components/ContactUs-div/CUs_div";
import Categories from "../../../../components/Categories/Categories";
import "./BP_Section2.css";
import EmptyList from "../../../../components/EmptyList/EmptyList";

const BP_Section2 = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  //   Category Fiter

  const filterItem = (categItem) => {
    const updatedItems = blogList.filter((curelem) => {
      // return curelem === categItem;
      return curelem.category.toLowerCase() === categItem;
    });
    setBlogs(updatedItems);
  };

  return (
    <>
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <div className="BP_section2_CategoryContainer">
        <p className="BP_section2_CategoryContainer_heading">Categories</p>
        <hr className="BP_hr" />
        <p
          className="BP_section2_CategoryContainer_text"
          onClick={() => filterItem("lor")}
        >
          LOR
        </p>
        <hr />
        <p
          className="BP_section2_CategoryContainer_text"
          onClick={() => filterItem("sop")}
        >
          SOP
        </p>
        <hr />
        <p
          className="BP_section2_CategoryContainer_text"
          onClick={() => filterItem("assignment")}
        >
          Assignment
        </p>
        <hr />
        <p
          className="BP_section2_CategoryContainer_text"
          onClick={() => filterItem("uncategorised")}
        >
          Uncategorised
        </p>
      </div>
      {/* {<BlogList blogs={blogs} />} */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <ContactUsDiv />
    </>
  );
};

export default BP_Section2;
