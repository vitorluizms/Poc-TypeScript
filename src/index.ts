import "express-async-errors";
import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import router from "routes/index.router";
import errorHandler from "@/middlewares/error.middleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
