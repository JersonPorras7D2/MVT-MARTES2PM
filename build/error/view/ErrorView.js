"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorView {
    notFound = async (_req, res) => {
        res.status(404).render('error');
    };
}
exports.default = ErrorView;
