import { check, validationResult } from "express-validator";
import { Snake } from "../models/snake.js";

export const getSnakes = async (req, res) => {
  const snakes = await Snake.find();
  res.status(200).send(snakes);
};

export const getSnakeById = async (req, res) => {
  let snake = await Snake.findById(req.params.id);
  res.status(200).send(snake);
};

export const getSnakeByName = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let snake = await Snake.find({ name: req.body.name });
  res.status(200).send(snake);
};

export const addSnake = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const snake = new Snake({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    race: req.body.race,
  });

  snake.save(snake).then((todo) => res.status(201).send("Snake added"));
};

export const updateSnake = async (req, res) => {
  const snake = await Snake.findById(req.params.id);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  snake.age = req.body.age;
  snake.save(snake).then((todo) => res.status(201).send("Snake updated"));
};

export const deleteSnake = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const snake = await Snake.findById(req.params.id);
  snake.delete(snake).then((todo) => res.status(201).send("Snake deleted"));
};

export const newSnakeValidators = [
  check("name").notEmpty().withMessage("Name is required"),
  check("race").notEmpty().withMessage("Race is required"),
  check("sex").notEmpty().withMessage("Sex is required"),
];

export const searchSnakeValidators = [
  check("name").notEmpty().withMessage("Name is required"),
];

export const updateSnakeValidators = [
  check("age").notEmpty().withMessage("Age is required"),
  check("age").isInt({ min: 0, max: 100 }).withMessage("Age must be positive"),
];
