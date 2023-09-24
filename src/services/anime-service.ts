import { conflict } from "@/errors/conflict";
import { notAccetable } from "@/errors/notAccetable";
import { notFound } from "@/errors/notFound";
import { CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { animeRepository } from "@/repositories/anime.repository";
import { Anime } from "@prisma/client";
import { valid } from "joi";

async function addAnime(body: CreateAnime) {
  const result: Anime = await animeRepository.validateAnimeByName(body.name);
  if (result) {
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

  const validate = await animeRepository.validateAnimeById(body.id);
  if (!validate) {
    throw notFound("O anime indicado não existe!");
  }

  await animeRepository.updateAnime(body);
}

async function deleteAnime(id: number) {
  if (isNaN(id)) {
    throw notAccetable("Envie um id correto!");
  }

  const result = await animeRepository.validateAnimeById(id);
  if (!result) {
    throw notFound("O id enviado não corresponde a um anime existente!");
  }

  await animeRepository.deleteAnime(id);
}

export const animeService = { addAnime, getAnimes, updateAnime, deleteAnime };
