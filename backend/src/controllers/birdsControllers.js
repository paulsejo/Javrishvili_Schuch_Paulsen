import { check, validationResult } from "express-validator";
import { Bird } from "../models/bird.js";

export const getBirds = async (req, res) => {
  const birds = await Bird.find();
  res.status(200).send(birds);
};

export const getBirdById = async (req, res) => {
  let bird = await Bird.findById(req.params.id);
  res.status(200).send(bird);
};

export const getBirdByName = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let bird = await Bird.find({ name: req.params.name });
  res.status(200).send(bird);
};

export const addBird = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const bird = new Bird({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    class: req.body.class,
    colour: req.body.colour,
  });

  bird.save(bird).then((todo) => res.status(201).send("Bird added"));
};

export const updateBird = async (req, res) => {
  const bird = await Bird.findById(req.params.id);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  bird.age = req.body.age;
  bird.save(bird).then((todo) => res.status(201).send("bird updated"));
};

export const deleteBird = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const bird = await Bird.findById(req.params.id);
  bird.delete(bird).then((todo) => res.status(201).send("bird deleted"));
};

export const newBirdValidators = [
  check("name").notEmpty().withMessage("Name is required"),
  check("class").notEmpty().withMessage("Class is required"),
  check("sex").notEmpty().withMessage("Sex is required"),
  check("colour").notEmpty().withMessage("Colour is required"),
];

export const searchBirdValidators = [
  check("name").notEmpty().withMessage("Name is required"),
];

export const updateBirdValidators = [
  check("age").notEmpty().withMessage("Age is required"),
  check("age").isInt({ min: 0, max: 100 }).withMessage("Age must be positive"),
];
