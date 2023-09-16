"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflict = void 0;
function conflict(message) {
    return {
        code: 409,
        message: "".concat(message),
    };
}
exports.conflict = conflict;
