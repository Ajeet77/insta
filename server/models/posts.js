const mongoose = require("mongoose");
const postsModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postsModel);
module.exports = Posts;
