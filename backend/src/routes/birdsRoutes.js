import express from "express";
import {
  getBirds,
  getBirdById,
  getBirdByName,
  addBird,
  updateBird,
  deleteBird,
  newBirdValidators,
  searchBirdValidators,
  updateBirdValidators,
} from "../controllers/birdsControllers.js";

const birdRouter = express.Router();

birdRouter.get("/", getBirds);
birdRouter.get("/search", searchBirdValidators, getBirdByName);
birdRouter.get("/:id", getBirdById);
birdRouter.post("/", newBirdValidators, addBird);
birdRouter.put("/:id", updateBirdValidators, updateBird);
birdRouter.delete("/:id", deleteBird);

export default birdRouter;
