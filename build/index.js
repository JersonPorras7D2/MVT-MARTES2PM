"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const ProductRouter_1 = __importDefault(require("./product/router/ProductRouter"));
const ProductView_1 = __importDefault(require("./product/view/ProductView"));
const ProductModel_1 = __importDefault(require("./product/model/ProductModel"));
const ErrorView_1 = __importDefault(require("./error/view/ErrorView"));
const ErrorRouter_1 = __importDefault(require("./error/router/ErrorRouter"));
const ContactRouter_1 = __importDefault(require("./contact/router/ContactRouter"));
const ContactView_1 = __importDefault(require("./contact/view/ContactView"));
const FormRouter_1 = __importDefault(require("./form/router/FormRouter"));
const FormView_1 = __importDefault(require("./form/view/FormView"));
const FormModel_1 = __importDefault(require("./form/model/FormModel"));
class Server {
    productRouter;
    errorRouter;
    contactRouter;
    formRouter;
    app;
    constructor(productRouter, errorRouter, contactRouter, formRouter) {
        this.productRouter = productRouter;
        this.errorRouter = errorRouter;
        this.contactRouter = contactRouter;
        this.formRouter = formRouter;
        this.app = (0, express_1.default)();
        this.configure();
        this.static();
        this.routes();
    }
    configure = () => {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.set('view engine', 'ejs');
        this.app.set('views', node_path_1.default.join(__dirname, './template'));
    };
    routes = () => {
        this.app.use('/products', this.productRouter.router);
        this.app.use('/{*any}', this.errorRouter.router);
        this.app.use('/contact', this.contactRouter.router);
        this.app.use('/form', this.formRouter.router);
    };
    static = () => {
        this.app.use(express_1.default.static(node_path_1.default.join(__dirname, './public')));
    };
    start = () => {
        const port = 1888;
        const host = 'localhost';
        this.app.listen(port, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    };
}
exports.default = Server;
const server = new Server(new ProductRouter_1.default(new ProductView_1.default(new ProductModel_1.default())), new ErrorRouter_1.default(new ErrorView_1.default()), new ContactRouter_1.default(new ContactView_1.default()), new FormRouter_1.default(new FormView_1.default(new FormModel_1.default())));
server.start();
