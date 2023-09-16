"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var anime_controller_1 = __importDefault(require("../controllers/anime.controller"));
var validateSchema_1 = require("../middlewares/validateSchema");
var schemas_1 = require("../schemas/schemas");
var express_1 = require("express");
var animeRouter = (0, express_1.Router)();
animeRouter.post("/animes", (0, validateSchema_1.validateSchema)(schemas_1.animeSchema), anime_controller_1.default.addAnime);
animeRouter.get("/animes", anime_controller_1.default.getAnimes);
animeRouter.patch("/animes", (0, validateSchema_1.validateSchema)(schemas_1.updateSchema), anime_controller_1.default.updateAnime);
exports.default = animeRouter;
