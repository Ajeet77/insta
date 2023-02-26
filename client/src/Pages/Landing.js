import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

export default function LandingPpage() {
  const navigate = useNavigate();

  return (
    <div className="land-container">
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-photo/laptop-showing-typesetting-software-graphic-designer-workspace_72104-3295.jpg?w=2000"
          alt="pic"
          className="img2"
        />
      </div>
      <div className="btn-container">
        <h1>10x Team 04</h1>
        <button
          className="lang-button"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
