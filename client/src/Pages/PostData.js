import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostData() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  
  const createPost = async (e) => {
    e.preventDefault();
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("author", author);
    loginFormData.append("location", location);
    loginFormData.append("description", description);
    loginFormData.append("img", img);

    try {
      // make axios post request
      await axios({
        method: "post",
        url: "https://instaclone-6ce3.onrender.com/create",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      //   console.log(response);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <form method="POST" onSubmit={createPost}>
        <div className="field-container">
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        </div>
        <div>
          <input
            type="text"
            placeholder="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostData;
