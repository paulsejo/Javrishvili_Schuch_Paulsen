import express from "express";
import {
  getSnakes,
  getSnakeById,
  getSnakeByName,
  addSnake,
  updateSnake,
  deleteSnake,
  newSnakeValidators,
  searchSnakeValidators,
  updateSnakeValidators,
} from "../controllers/snakesControllers.js";

const snakeRouter = express.Router();

snakeRouter.get("/", getSnakes);
snakeRouter.get("/search", searchSnakeValidators, getSnakeByName);
snakeRouter.get("/:id", getSnakeById);
snakeRouter.post("/", newSnakeValidators, addSnake);
snakeRouter.put("/:id", updateSnakeValidators, updateSnake);
snakeRouter.delete("/:id", deleteSnake);

export default snakeRouter;
