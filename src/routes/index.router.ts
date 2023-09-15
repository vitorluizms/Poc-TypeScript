import { Router } from "express";
import animeRouter from "./anime.router";

const router = Router();

router.use(animeRouter);

export default router;
