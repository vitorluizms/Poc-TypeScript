"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.animeSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.animeSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(100).required(),
    gender: joi_1.default.string().min(2).max(50).required(),
    episodes: joi_1.default.number().greater(0).required(),
    seasons: joi_1.default.number().greater(0).required(),
});
exports.updateSchema = joi_1.default.object({
    id: joi_1.default.number().greater(0).required(),
    episodes: joi_1.default.number().greater(0),
    seasons: joi_1.default.number().greater(0),
});
