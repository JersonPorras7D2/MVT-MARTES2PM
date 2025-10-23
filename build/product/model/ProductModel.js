"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_json_1 = __importDefault(require("../../../database/products.json"));
class ProductModel {
    fetchProducts = async () => {
        const data = products_json_1.default;
        if (!data) {
            throw new Error('No products found');
        }
        return data;
    };
}
exports.default = ProductModel;
