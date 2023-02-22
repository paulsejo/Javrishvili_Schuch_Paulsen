import express from "express";
import { getDogs, getDogById } from "./dogsControllers.js";

const router = express.Router();

router.get("/", getDogs);
router.get("/:id", getDogById);
