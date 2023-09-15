import { conflict } from "@/errors/conflict";
import { CreateAnime } from "@/protocols/protocol";
import { animeRepository } from "@/repositories/anime.repository";

async function addAnime(body: CreateAnime) {
  const result = await animeRepository.validateAnime(body.name);
  if (result > 0) {
    throw conflict("Esse anime já está cadastrado!");
  }
  await animeRepository.addAnime(body);
}

export const animeService = { addAnime };
