import { CreateAnime } from "@/protocols/protocol";
import { animeService } from "@/services/anime.service";
import { Request, Response } from "express";

async function addAnime(req: Request, res: Response) {
  console.log(req.body);
  const body = req.body as CreateAnime;
  await animeService.addAnime(body);

  res.status(201).send("Anime cadastrado com sucesso!");
}

const animeController = { addAnime };
export default animeController;
