const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true }, // corrigé
    content: { type: String, required: true },
    cover: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "Userlindaa" },
  },
  { timestamps: true }
);

const PostModel = model("post", PostSchema);

module.exports = PostModel;
