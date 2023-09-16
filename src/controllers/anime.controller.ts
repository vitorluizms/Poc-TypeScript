import { Anime, CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { animeService } from "@/services/anime.service";
import { Request, Response } from "express";
import httpStatus, { CREATED } from "http-status";

async function addAnime(req: Request, res: Response) {
  console.log(req.body);
  const body = req.body as CreateAnime;
  await animeService.addAnime(body);

  res.status(httpStatus.CREATED).send("Anime cadastrado com sucesso!");
}

async function getAnimes(req: Request, res: Response) {
  const body: Anime[] = await animeService.getAnimes();
  res.status(httpStatus.OK).send(body);
}

async function updateAnime(req: Request, res: Response) {
  const body = req.body as UpdateAnime;
  await animeService.updateAnime(body);
  res.status(httpStatus.CREATED).send("Anime alterado com sucesso!");
}

const animeController = { addAnime, getAnimes, updateAnime };
export default animeController;
