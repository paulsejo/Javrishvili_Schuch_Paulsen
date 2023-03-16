import express from "express";
import {
  getBirds,
  getBirdById,
  getBirdByName,
  addBird,
  updateBird,
  deleteBird,
  newBirdValidators,
  updateBirdValidators,
} from "../controllers/birdsControllers.js";

const birdRouter = express.Router();

birdRouter.get("/", getBirds);
birdRouter.get("/:id", getBirdById);
birdRouter.get("/:name", getBirdByName);
birdRouter.post("/", newBirdValidators, addBird);
birdRouter.put("/:id", updateBirdValidators, updateBird);
birdRouter.delete("/:id", deleteBird);

export default birdRouter;
