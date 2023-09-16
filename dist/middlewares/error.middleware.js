"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    if (error.code === 400)
        return res.status(http_status_1.default.BAD_REQUEST).send(error.message);
    if (error.code === 404)
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    if (error.code === 406)
        return res.status(http_status_1.default.NOT_ACCEPTABLE).send(error.message);
    if (error.code === 409)
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error.message);
}
exports.default = errorHandler;
