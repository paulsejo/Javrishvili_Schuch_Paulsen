import express from "express";
import {
  getDogs,
  getDogById,
  getDogByName,
  addDog,
  updateDog,
  deleteDog,
  newDogValidators,
  searchDogValidators,
  updateDogValidators,
} from "../controllers/dogsControllers.js";

const dogRouter = express.Router();

dogRouter.get("/", getDogs);
dogRouter.get("/search", searchDogValidators, getDogByName);
dogRouter.get("/:id", getDogById);
dogRouter.post("/", newDogValidators, addDog);
dogRouter.put("/:id", updateDogValidators, updateDog);
dogRouter.delete("/:id", deleteDog);

export default dogRouter;
