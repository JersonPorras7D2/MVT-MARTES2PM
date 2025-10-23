"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormModel {
    // In a real app this would persist to DB.
    saveRegistration = async (data) => {
        console.log('Registration received:', data);
        return true;
    };
}
exports.default = FormModel;
