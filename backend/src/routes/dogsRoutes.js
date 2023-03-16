import express from "express";
import {
  getDogs,
  getDogById,
  getDogByName,
  addDog,
  updateDog,
  deleteDog,
  newDogValidators,
  updateDogValidators,
} from "../controllers/dogsControllers.js";

const dogRouter = express.Router();

dogRouter.get("/", getDogs);
dogRouter.get("/:id", getDogById);
dogRouter.get("/:name", getDogByName);
dogRouter.post("/", newDogValidators, addDog);
dogRouter.put("/:id", updateDogValidators, updateDog);
dogRouter.delete("/:id", deleteDog);

export default dogRouter;
