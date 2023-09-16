"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = __importDefault(require("pg"));
dotenv_1.default.config();
var Pool = pg_1.default.Pool;
var configDatabase = {
    connectionString: process.env.DATABASE_URL,
};
if (process.env.NODE_ENV === "production")
    configDatabase.ssl = true;
var db = new Pool(configDatabase);
exports.default = db;
