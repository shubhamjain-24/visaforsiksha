import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './BlogList.css'

const BlogList = ({blogs}) => {
  // console.log(blogs)
  return (
    <>
      <div className="blogList-wrap">
        <p className="recentBlogs">Recent Posts</p>
        {/* {console.log(blogs)}  */}
         {blogs.map(blog=>
            <BlogItem blog={blog} key={blog.id}/>
           
        )}
    
      </div>
    </>
  );
}

export default BlogList