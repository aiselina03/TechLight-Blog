import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./style.scss";

function Myblog() {
  const [blogs, setBlogs] = useState([]);
  const { decode } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlog();
  }, []);

  function getAllBlog() {
    fetch("http://localhost:3000/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }

  return (
    <>
      {decode ? (
        <>
          <div className="myBlogSec">
            <h1>My Blogs</h1>
            <p>
              <Link to={"/"}>Home</Link> / My Blogs
            </p>
          </div>
          {loading ? (
            <div className="loaderCenterCards">
              <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </div>
            </div>
          ) : (
            <div className="myblogsPage">
              <div className="myblogs">
                {blogs.map((x) => (
                  <div className="myblog" key={x._id}>
                    <div className="img">
                      <div className="pen">
                        {/* <i class="fa-regular fa-pen"></i> */}
                        <Link to={`/editBlog/${x._id}`}>
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                      </div>

                      <Link to={"/blogDetail/" + x._id}>
                        <img src={x.image} alt="" />
                      </Link>
                    </div>

                    <h3>{x.title}</h3>

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
      ) : (
        <Navigate to={"/login"}></Navigate>
      )}
    </>
  );
}

export default Myblog;
