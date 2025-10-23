import {Router} from "express";
import ErrorView from "../view/ErrorView";

export default class ErrorRouter {
    router: Router;

    constructor(private readonly errorView: ErrorView) {
        this.router = Router();
        this.routes();
    }

    readonly routes = ():void => {
        this.router.get(
            '/', this.errorView.notFound
        );
    }
}