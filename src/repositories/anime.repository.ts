import prisma from "@/database/connection.database";
import { CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { Anime } from "@prisma/client";

async function addAnime(body: CreateAnime) {
  return await prisma.anime.create({
    data: body,
  });
}

async function validateAnimeByName(name: string): Promise<Anime> {
  const result = await prisma.anime.findFirst({
    where: { name: { contains: name } },
  });

  return result;
}

async function validateAnimeById(id: number) {
  const result = await prisma.anime.findFirst({
    where: { id },
  });
  return result;
}

async function getAnimes(): Promise<Anime[]> {
  const result = await prisma.anime.findMany();
  return result;
}

async function updateAnime(body: UpdateAnime) {
  return await prisma.anime.update({
    data: body,
    where: { id: body.id },
  });
}

async function deleteAnime(id: number) {
  return await prisma.anime.delete({ where: { id } });
}

export const animeRepository = {
  addAnime,
  validateAnimeById,
  validateAnimeByName,
  getAnimes,
  updateAnime,
  deleteAnime,
};
