import { CreateAnime } from "@/protocols/protocol";
import Joi from "joi";

export const animeSchema = Joi.object<CreateAnime>({
  name: Joi.string().min(2).max(100).required(),
  gender: Joi.string().min(2).max(50).required(),
  episodes: Joi.number().greater(0).required(),
  seasons: Joi.number().greater(0).required(),
});