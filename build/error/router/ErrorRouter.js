"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ErrorRouter {
    errorView;
    router;
    constructor(errorView) {
        this.errorView = errorView;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes = () => {
        this.router.get('/', this.errorView.notFound);
    };
}
exports.default = ErrorRouter;
