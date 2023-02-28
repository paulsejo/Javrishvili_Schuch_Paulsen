import express from "express";
import {
  getDogs,
  getDogById,
  getDogByName,
  addDog,
  newDogValidators,
} from "../controllers/dogsControllers.js";

const router = express.Router();

router.get("/", getDogs);
router.get("/:id", getDogById);
router.get("/:name", getDogByName);
router.post("/", newDogValidators, addDog);

export default router;
