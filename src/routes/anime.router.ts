import animeController from "@/controllers/anime.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { CreateAnime } from "@/protocols/protocol";
import { animeSchema } from "@/schemas/schemas";
import { Router } from "express";

const animeRouter = Router();

animeRouter.post(
  "/animes",
  validateSchema<CreateAnime>(animeSchema),
  animeController.addAnime
);
animeRouter.get("/animes", animeController.getAnimes);

export default animeRouter;
