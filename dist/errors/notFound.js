"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
function notFound(message) {
    return {
        code: 404,
        message: "".concat(message),
    };
}
exports.notFound = notFound;
