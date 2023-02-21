import express from "express";
import bodyParser from "body-parser";
import router from "./dogsRoutes.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/dogs", router);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.post("/dogs", (req, res) => {
  dogs.push(req.body);
  res.status(201).send("Dog added");
});
