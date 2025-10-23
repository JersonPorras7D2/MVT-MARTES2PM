"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormView {
    formModel;
    constructor(formModel) {
        this.formModel = formModel;
    }
    showForm = (_req, res) => {
        res.status(200).render('form');
    };
    submitForm = async (req, res) => {
        const { firstNames, lastNames, documentId, address, phone } = req.body;
        await this.formModel.saveRegistration({ firstNames, lastNames, documentId, address, phone });
        res.status(200).render('form', { success: true });
    };
}
exports.default = FormView;
