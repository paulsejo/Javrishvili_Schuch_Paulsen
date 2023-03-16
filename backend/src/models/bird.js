import mongoose from "mongoose";

const birdSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  class: String,
  colour: String,
});

export const Bird = mongoose.model("Bird", birdSchema);
