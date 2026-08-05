import { Router } from "express";
import { UserController } from "./controller.js";

class UserRouter {
    constructor(public router: Router = Router()) {
        this.initRouter();
    }
    private initRouter = (): void => {
        this.router.post("/", UserController.createUser);
        this.router.get("/", UserController.getUsersByQuery);
        this.router.patch(
            "/:id",
            UserController.updateUser
        );
        this.router.delete("/:id", UserController.deleteUser);
    };
}

export default new UserRouter().router;
