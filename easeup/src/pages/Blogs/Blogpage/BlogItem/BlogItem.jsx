import React from "react";
import "./BlogItem.css";
import { Link, NavLink } from "react-router-dom";
const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) => {
    const handleClick = () => {
    window.location.redirect();
  }
  return (
    <>
      {/* Ye chote wale blogs he search filter ke neeche wale  */}
      <div className="BI_mainContaier">
        <div className="BI_subContainer">
          <div className="BI_card">
            <img className="BI_cardImg" src={cover} alt="" srcset="" />
            <Link
              className="blogItem-link"
              to={`/blog/blog/${id}`}
              onClick={handleClick}
            >
              <p className="BI_cardTitle">{title}</p>
            </Link>
            {/* <Link className="blogItem-link" to='/blog/blog/3'>
              <p className="BI_cardTitle">jiijij</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
