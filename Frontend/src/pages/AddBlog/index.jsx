import React, { useContext, useRef, useState } from "react";
import "./style.scss";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function AddBlog() {
  const myFileInput = useRef();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [username, setUsername] = useState("");
  const { decode } = useContext(UserContext);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("username", username);

    const response = await fetch("http://localhost:3000/api/blog/", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      window.location.href = "/myBlog";
    }
  }

  return (
    <>
      {decode ? (
        <>
          <div className="addBlogSec">
            <h1>Add Blog</h1>
            <p>
              <Link to={"/"}>Home</Link> / Add Blog
            </p>
          </div>
          <div className="addBlogPage">
            <div className="addBlog">
              <div className="addImage">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <img style={{width:"290px"}}
                    src="https://www.pngmart.com/files/Album-PNG-Pic.png"
                    alt=""
                  />
                )}

               
              </div>
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="file"
                  onChange={handleImageChange}
                  ref={myFileInput}
                  className="noneInput"
                />
                <div
                  className="upload"
                  onClick={() => {
                    myFileInput.current.click();
                  }}
                >
                  <i className="fa-solid fa-upload"></i> <span>Add Image</span>
                </div>

                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDesc(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Author"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Add Blog</button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Navigate to={"/login"}></Navigate>
      )}
    </>
  );
}

export default AddBlog;
