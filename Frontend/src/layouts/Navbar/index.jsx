import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const { decode, logOut } = useContext(UserContext);
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  function stickyNavbar() {
    if (window.scrollY >= 600) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <div
        className={`navbar
     ${sticky === true ? "sticky" : ""}`}
      >
        <div className="header">
          <div className="page">
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>Terms Of Use</p>
          </div>
          <div className="brand">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="nav">
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://demo.templatesjungle.com/techlight/images/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="menu">
            <ul>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/myBlog"}>My Blog</NavLink>
              <NavLink to={"/addBlog"}>Add Blog</NavLink>
            </ul>
          </div>
          <div className="icons">
            {decode ? (
              <>
                <div className="user">
                  <div className="profile">
                    <i className="fa-solid fa-user"></i>
                    <h3>Profile</h3>
                  </div>

                  <div className="logOut" onClick={logOut}>
                    <i className="fa-regular fa-right-from-bracket"></i>
                    <p>Log Out</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="login">
                <NavLink to={"/login"}>
                  {/* <i className="fa-light fa-user"></i> */}
                  <h3>Login </h3>
                </NavLink>{" "}
                <h3>||</h3>
                <NavLink to={"/signUp"}>
                  {/* <i className="fa-light fa-user"></i> */}
                  <h3>Sign Up </h3>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`resNavbar
         ${sticky === true ? "sticky" : ""}`}>
        <div className="row">
          <div className="bars" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://demo.templatesjungle.com/techlight/images/logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="icons">
            {decode ? (
              <i className="fa-solid fa-user" onClick={logOut}></i>
            ) : (
              <NavLink to={"/login"}>
                <i className="fa-light fa-user"></i>
              </NavLink>
            )}
          </div>
        </div>
        <div className={`resMenu ${isOpen ? "open" : ""}`}>
          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/myBlog"}>My Blog</NavLink>
            <NavLink to={"/addBlog"}>Add Blog</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
