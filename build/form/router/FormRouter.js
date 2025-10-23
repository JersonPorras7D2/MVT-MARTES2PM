"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class FormRouter {
    formView;
    router;
    constructor(formView) {
        this.formView = formView;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes = () => {
        this.router.get('/v1.0/register', this.formView.showForm);
        this.router.post('/v1.0/register', this.formView.submitForm);
    };
}
exports.default = FormRouter;
