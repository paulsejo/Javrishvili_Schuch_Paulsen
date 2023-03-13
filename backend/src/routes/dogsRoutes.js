import express from "express";
import {
  getDogs,
  getDogById,
  getDogByName,
  addDog,
  updateDog,
  newDogValidators,
  updateDogValidators,
} from "../controllers/dogsControllers.js";

const router = express.Router();

router.get("/", getDogs);
router.get("/:id", getDogById);
router.get("/:name", getDogByName);
router.post("/", newDogValidators, addDog);
router.put("/", updateDogValidators, updateDog);

export default router;
