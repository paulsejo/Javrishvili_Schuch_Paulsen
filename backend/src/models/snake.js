import mongoose from "mongoose";

const snakeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  race: String,
});

export const Snake = mongoose.model("Snake", snakeSchema);
