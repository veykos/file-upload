const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);
const Movie = model("Movie", movieSchema)
module.exports = Movie