import { check, validationResult } from "express-validator";

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

export const getDogs = (req, res) => {
  res.status(200).send(dogs);
};

export const getDogById = (req, res) => {
  let dog = dogs.find((dog) => dog.id === parseInt(req.params.id));
  if (!dog) {
    res.status(404).send("Dog not found");
  }
  res.status(200).send(dog);
};
