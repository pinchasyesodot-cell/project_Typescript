import { Router } from "express";
import { UserController } from "./controller.js";
import { validateRequest } from "./middlewares/validateRequest.js";
import { idSchema, updateUserSchema, userQuerySchema, userSchema } from "./validation.js";

class UserRouter {
    constructor(public router: Router = Router()) {
        this.initRouter();
    }
    private initRouter = (): void => {
        this.router.post("/", validateRequest(userSchema, "body"), UserController.createUser);
        this.router.get("/", validateRequest(userQuerySchema, "query"), UserController.getUsersByQuery);
        this.router.patch(
            "/:id",
            validateRequest(idSchema, "params"),
            validateRequest(updateUserSchema, "body"),
            UserController.updateUser
        );
        this.router.delete("/:id", validateRequest(idSchema, "params"), UserController.deleteUser);
    };
}

export default new UserRouter().router;
