"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationRoutes = void 0;
const token_validation_1 = require("../middlewares/token.validation");
const evaluation_controller_1 = require("../controllers/evaluation.controller");
exports.EvaluationRoutes = (routes) => {
    routes.post('/gym/evaluation', token_validation_1.TokenValidationAdmin, evaluation_controller_1.createEvaluation)
        .get('/gym/evaluation', token_validation_1.TokenValidation, evaluation_controller_1.getEvaluation)
        .get('/gym/evaluation/:evaluationId', token_validation_1.TokenValidation, evaluation_controller_1.getEvaluationById)
        .patch('/gym/evaluation/:evaluationId', token_validation_1.TokenValidationAdmin, evaluation_controller_1.updateEvaluation)
        .delete('/gym/evaluation/:evaluationId', token_validation_1.TokenValidationAdmin, evaluation_controller_1.deleteEvaluation);
};
//# sourceMappingURL=evaluation.routes.js.map