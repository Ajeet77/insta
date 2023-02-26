import React, { useEffect, useState } from "react";
import "../App.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from 'axios'

export default function PostView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4040/profile').then(res=>{
      setData(res.data)
      // console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }, []);
  return (
    <>
      <div className="header">
        <h2>
          <TrackChangesIcon/>Instaclone

          <em>
          <Link to="/create" style={{textDecoration:'none'}}><CameraAltOutlinedIcon /></Link>
          </em>
        </h2>
        <hr />
        <div className="container">
          {data.map((data) => {
            return (
              <section>
                <div className="col1">
                  <p className="bold">
                    {data.name}
                    <em>
                      <MoreHorizIcon />
                    </em>
                  </p>
                  <p>{data.location}</p>
                </div>
                <div className="col2">
                  <img className="img2" src={data.img} alt="" />
                </div>
                <p>
                  <FavoriteBorderIcon />
                  <SendIcon />
                </p>
                <div className="col3">
                  <p>{parseInt(Math.random()*500)} Likes</p>
                  <p>{format(data.createdAt)}</p>
                </div>
                <p className="desc">{data.description}</p>
              </section>
            );
          }).reverse()}
        </div>
      </div>
    </>
  );
}
