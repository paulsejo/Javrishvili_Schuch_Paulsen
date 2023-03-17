import { check, validationResult } from "express-validator";
import { Dog } from "../models/dog.js";

export const getDogs = async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).send(dogs);
};

export const getDogById = async (req, res) => {
  let dog = await Dog.findById(req.params.id);
  res.status(200).send(dog);
};

export const getDogByName = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let dog = await Dog.find({ name: req.body.name });
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

export const updateDog = async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  dog.age = req.body.age;
  dog.save(dog).then((todo) => res.status(201).send("Dog updated"));
};

export const deleteDog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const dog = await Dog.findById(req.params.id);
  dog.delete(dog).then((todo) => res.status(201).send("Dog deleted"));
};

export const newDogValidators = [
  check("name").notEmpty().withMessage("Name is required"),
  check("race").notEmpty().withMessage("Race is required"),
  check("sex").notEmpty().withMessage("Sex is required"),
];

export const searchDogValidators = [
  check("name").notEmpty().withMessage("Name is required"),
];

export const updateDogValidators = [
  check("age").notEmpty().withMessage("Age is required"),
  check("age").isInt({ min: 0, max: 100 }).withMessage("Age must be positive"),
];
