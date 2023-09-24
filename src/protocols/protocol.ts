import { Anime } from "@prisma/client";

export type CreateAnime = Omit<Anime, "id">;

export type Error = {
  code: number;
  message: string;
};

export type UpdateAnime = {
  id: number;
  episodes?: number;
  seasons?: number;
  name?: string;
};

export type DeleteAnime = {
  id: number;
};
