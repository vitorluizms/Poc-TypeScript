import { conflict } from "@/errors/conflict";
import { Anime, CreateAnime } from "@/protocols/protocol";
import { animeRepository } from "@/repositories/anime.repository";

async function addAnime(body: CreateAnime) {
  const result: number = await animeRepository.validateAnime(body.name);
  if (result > 0) {
    throw conflict("Esse anime já está cadastrado!");
  }
  await animeRepository.addAnime(body);
}

async function getAnimes(): Promise<Anime[]> {
  const result: Anime[] = await animeRepository.getAnimes();
  return result;
}

export const animeService = { addAnime, getAnimes };
