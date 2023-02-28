import express from "express";
import bodyParser from "body-parser";
import router from "./routes/dogsRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/dogs", router);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

mongoose.connect("mongodb://localhost:27017/dogs").then(() => {
  console.log("Connected to database");
});
