import { check, validationResult } from "express-validator";
import { Dog } from "../models/dog.js";

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
    race: "wienerdog",
  },
];

export const getDogs = async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).send(dogs);
};

export const getDogById = async (req, res) => {
  let dog = Dog.findById(req.params.id);
  res.status(200).send(dog);
};

export const getDogByName = async (req, res) => {
  let dog = Dog.find({ name: req.params.name });
  res.status(200).send(dog);
};

export const addDog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const dog = new Dog({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    race: req.body.race,
  });

  dog.save(dog).then((todo) => res.status(201).send("Dog added"));
};

export const newDogValidators = [
  check("name").notEmpty().withMessage("Name is required"),
  check("age").notEmpty().withMessage("Age is required"),
  check("sex").notEmpty().withMessage("Sex is required"),
];
