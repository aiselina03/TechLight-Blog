import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderCenter">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="blogsPage">
          <h1>Blogs</h1>
          <div className="blogs">
            {blogs.map((x) => (
              <div className="blog" key={x._id}>
                <Link to={"/blogDetail/" + x._id}>
                  <img src={x.image} alt="" />
                  <h3>{x.title}</h3>
                </Link>
                <div className="date">
                  <p>
                    by <span>{x.username}</span>
                  </p>
                  <p>{new Date(x.createdAt).toLocaleDateString()}</p>
                </div>
                <p>{x.desc.slice(0, 99)}...</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Blogs;
