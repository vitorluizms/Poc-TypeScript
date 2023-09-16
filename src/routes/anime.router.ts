import animeController from "@/controllers/anime.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { animeSchema, updateSchema } from "@/schemas/schemas";
import { Router } from "express";

const animeRouter = Router();

animeRouter.post(
  "/animes",
  validateSchema<CreateAnime>(animeSchema),
  animeController.addAnime
);
animeRouter.get("/animes", animeController.getAnimes);
animeRouter.patch(
  "/animes",
  validateSchema<UpdateAnime>(updateSchema),
  animeController.updateAnime
);

export default animeRouter;
