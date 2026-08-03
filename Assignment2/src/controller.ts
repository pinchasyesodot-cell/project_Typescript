import type { NextFunction, Request, Response } from "express";
import { type CreateUser } from "./interface.js";
import { UserService } from "./service.js";

export class UserController {
    static createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userData: CreateUser = req.body;
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };

}
