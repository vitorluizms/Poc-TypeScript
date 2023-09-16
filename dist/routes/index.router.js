"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var anime_router_1 = __importDefault(require("./anime.router"));
var router = (0, express_1.Router)();
router.use(anime_router_1.default);
exports.default = router;
