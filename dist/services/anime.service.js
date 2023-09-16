"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeService = void 0;
var conflict_1 = require("../errors/conflict");
var notAccetable_1 = require("../errors/notAccetable");
var notFound_1 = require("../errors/notFound");
var anime_repository_1 = require("../repositories/anime.repository");
function addAnime(body) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, anime_repository_1.animeRepository.validateAnime(body.name)];
                case 1:
                    result = _a.sent();
                    if (result > 0) {
                        throw (0, conflict_1.conflict)("Esse anime já está cadastrado!");
                    }
                    return [4 /*yield*/, anime_repository_1.animeRepository.addAnime(body)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getAnimes() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, anime_repository_1.animeRepository.getAnimes()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function updateAnime(body) {
    return __awaiter(this, void 0, void 0, function () {
        var validate, query, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body.episodes && !body.seasons) {
                        throw (0, notAccetable_1.notAccetable)("Envie ao menos um dado para alteração!");
                    }
                    return [4 /*yield*/, anime_repository_1.animeRepository.validateAnime(body.id)];
                case 1:
                    validate = _a.sent();
                    if (validate === 0) {
                        throw (0, notFound_1.notFound)("O anime indicado não existe!");
                    }
                    query = "";
                    params = [body.id];
                    if (body.episodes) {
                        query += "".concat(body.seasons ? "episodes = $2, seasons = $3" : "episodes = $2");
                        params.push(body.episodes);
                        if (body.seasons) {
                            params.push(body.seasons);
                        }
                    }
                    else if (body.seasons) {
                        query += "seasons = $2";
                        params.push(body.seasons);
                    }
                    return [4 /*yield*/, anime_repository_1.animeRepository.updateAnime(query, params)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteAnime(id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isNaN(id)) {
                        throw (0, notAccetable_1.notAccetable)("Envie um id correto!");
                    }
                    return [4 /*yield*/, anime_repository_1.animeRepository.validateAnime(id)];
                case 1:
                    result = _a.sent();
                    if (result === 0) {
                        throw (0, notFound_1.notFound)("O id enviado não corresponde a um anime existente!");
                    }
                    return [4 /*yield*/, anime_repository_1.animeRepository.deleteAnime(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.animeService = { addAnime: addAnime, getAnimes: getAnimes, updateAnime: updateAnime, deleteAnime: deleteAnime };
