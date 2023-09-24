import { CreateAnime, UpdateAnime } from "@/protocols/protocol";
import { Anime } from "@prisma/client";
import Joi from "joi";

export const animeSchema = Joi.object<Anime>({
  name: Joi.string().min(2).max(100).required(),
  genderId: Joi.number().greater(0).required(),
  episodes: Joi.number().greater(0).required(),
  seasons: Joi.number().greater(0).required(),
});

export const updateSchema = Joi.object<UpdateAnime>({
  id: Joi.number().greater(0).required(),
  episodes: Joi.number().greater(0),
  seasons: Joi.number().greater(0),
});
