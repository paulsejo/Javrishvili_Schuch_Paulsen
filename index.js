import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.get("/", (req, res) => {});

app.get("/dogs", (req, res) => {
  res.status(200).send(dogs);
});

app.post("/dogs", (req, res) => {
  dogs.push(req.body);
  res.status(201).send("Dog added");
});

const dogs = [
  {
    id: 0,
    name: "Fido",
    age: 3,
    sex: "male",
    race: "chihuahua",
  },
  {
    id: 1,
    name: "Fifi",
    age: 5,
    sex: "female",
    race: "sausagedog",
  },
];
