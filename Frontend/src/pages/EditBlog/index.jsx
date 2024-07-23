import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

function EditBlog() {
  const myFileInput = useRef();
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    getBlog(id);
  }, [id]);

  async function getBlog(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/blog/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const blogData = await response.json();
      setImage(blogData.image);
      setImagePreview(blogData.image);
      setTitle(blogData.title);
      setDesc(blogData.desc);
      setUsername(blogData.username);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

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

    const data = await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (data.ok) {
      window.location.href = "/myBlog";
    }
    console.log("Product updated successfully");
  }

  async function deleteById() {
    try {
      const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      console.log("Blog deleted successfully");
      window.location.href = "/myBlog";
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  }

  return (
    <>
      <div className="editBlogPage">
        <form onSubmit={handleSubmit} className="form">
          <div className="preview">
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
              <i className="fa-solid fa-upload"></i> <span>Edit Image</span>
            </div>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "450px", height: "450px", objectFit: "cover" }}
              />
            )}
          </div>

          <div className="inputs">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="">Description:</label>
            <input
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor="">Author:</label>
            <input
              type="text"
              placeholder="Author"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Edit Blog</button>
            <button className="delete" onClick={deleteById}>
              Delete Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditBlog;
