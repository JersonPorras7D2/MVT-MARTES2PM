"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductRouter {
    view;
    router;
    constructor(view) {
        this.view = view;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes = () => {
        this.router.get('/v1.0/list', this.view.getProductList);
    };
}
exports.default = ProductRouter;
