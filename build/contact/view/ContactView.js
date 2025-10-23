"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactView {
    contact = (_req, res) => {
        res.status(404).render('contact');
    };
    register = (req, res) => {
        const { name, email, message } = req.body;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        res.status(200).render('contact', { success: true });
    };
}
exports.default = ContactView;
