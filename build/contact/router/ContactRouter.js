"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ContactRouter {
    contactView;
    router;
    constructor(contactView) {
        this.contactView = contactView;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes = () => {
        this.router.get('/v1.0/contact', this.contactView.contact);
        this.router.post('/v1.0/contact', this.contactView.contact);
    };
}
exports.default = ContactRouter;
