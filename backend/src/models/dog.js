import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  race: String,
});

export const Dog = mongoose.model("Dog", dogSchema);
