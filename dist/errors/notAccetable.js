"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notAccetable = void 0;
function notAccetable(message) {
    return {
        code: 406,
        message: "".concat(message),
    };
}
exports.notAccetable = notAccetable;
