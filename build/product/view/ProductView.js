"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductView {
    productModel;
    constructor(productModel) {
        this.productModel = productModel;
    }
    getProductList = async (_req, res) => {
        const products = await this.productModel.fetchProducts();
        res.status(200).render('products', { products });
    };
}
exports.default = ProductView;
