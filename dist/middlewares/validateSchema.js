"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
function validateSchema(schema) {
    return function (req, res, next) {
        var validate = schema.validate(req.body, {
            abortEarly: false,
        });
        if (validate.error) {
            var errors_1 = "";
            validate.error.details.forEach(function (detail, index) {
                if (index !== validate.error.details.length - 1)
                    errors_1 += "".concat(detail.message, "\n");
                else
                    errors_1 += detail.message;
            });
            return res.status(422).send(errors_1);
        }
        next();
    };
}
exports.validateSchema = validateSchema;
