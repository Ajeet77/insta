const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const dotenv = require('dotenv')
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const Posts = require("./models/posts");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const DB = process.env.MONGO_URI;
mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongoDB");
  }
);

cloudinary.config({
  cloud_name: "dzsjfskox",
  api_key: "883783873999573",
  api_secret: "jxT6GhsC53qUK3qlKUIvLS7Fs6k",
  secure: true,
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.post("/create", (req, res) => {
  const image = req.files.img;
  cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
    // console.log(result);
    const post = new Posts({
      name: req.body.author,
      location: req.body.location,
      description: req.body.description,
      img: result.url,
    });

    post
      .save()
      .then((result) => {
        // console.log(result);
        res.status(200).json({ post: result });
      })
      .catch((err) => {
        // console.log(err);
        res.status(500).json({ Error: err });
      });
  });
});

app.get("/profile", async (req, res) => {
  try {
    const post = await Posts.find({});
    // console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

app.get("/", async (req, res) => {
  try{
    res.send("Server Access");
  } catch(error){
    res.send(error);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Connected to Server");
});
