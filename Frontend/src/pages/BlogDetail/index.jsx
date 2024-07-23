import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss"

function BlogDetail() {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/api/blog/" + id)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [id]);

  return (
    <>
     <div className="blogDetailSec">
        <h1>Blog Detail</h1>
        <p>
          <Link to={"/"}>Home</Link> / Blog Detail
        </p>
      </div>
      <div className="blogsDetailPage">
      <div className="blogsDetail">
        <div className="blogDetail">
          <div className="img">
           <img src={blogs.image} alt="" />   
          </div>
        <div className="detailText">
          <h2>{blogs.title}</h2>
          <div className="info">
            <p>
              Author: <span>{blogs.username}</span>
            </p>
            <p className="date">Date: <span>{new Date(blogs.createdAt).toLocaleDateString()}</span></p>
          </div>

          <p className="desc">{blogs.desc}</p>
        </div>
          
        </div>
      </div>
    </div>
    </>
 
  );
}

export default BlogDetail;
