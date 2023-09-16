import { conflict } from "@/errors/conflict";
import { notAccetable } from "@/errors/notAccetable";
import { notFound } from "@/errors/notFound";
import { Anime, CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { animeRepository } from "@/repositories/anime.repository";
import { valid } from "joi";

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

async function updateAnime(body: UpdateAnime) {
  if (!body.episodes && !body.seasons) {
    throw notAccetable("Envie ao menos um dado para alteração!");
  }

  const validate = await animeRepository.validateAnime(body.id);
  if (validate === 0) {
    throw notFound("O anime indicado não existe!");
  }
  let query = "";
  let params = [body.id];
  if (body.episodes) {
    query += `${
      body.seasons ? "episodes = $2, seasons = $3" : "episodes = $2"
    }`;

    params.push(body.episodes);
    if (body.seasons) {
      params.push(body.seasons);
    }
  } else if (body.seasons) {
    query += "seasons = $2";
    params.push(body.seasons);
  }

  await animeRepository.updateAnime(query, params);
}

export const animeService = { addAnime, getAnimes, updateAnime };
