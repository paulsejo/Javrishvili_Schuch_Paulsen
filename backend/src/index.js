import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import dogRouter from "./routes/dogsRoutes.js";
import birdRouter from "./routes/birdsRoutes.js";
import snakeRouter from "./routes/snakesRoutes.js";
import swaggerDocuments from "../swaggerDocuments.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocuments));
app.use("/pets/dogs", dogRouter);
app.use("/pets/birds", birdRouter);
app.use("/pets/snakes", snakeRouter);

mongoose.connect("mongodb://mongo:27017/dogs").then(() => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
