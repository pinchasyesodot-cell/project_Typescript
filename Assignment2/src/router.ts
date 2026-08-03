import { Router } from "express";
import { UserController } from "./controller.js";

class UserRouter {
    constructor(public router: Router = Router()) {
        this.initRouter();
    }
    private initRouter = (): void => {
        this.router.post("/", UserController.createUser);
}

export default new UserRouter().router;
