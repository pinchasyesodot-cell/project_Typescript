import type { NextFunction, Request, Response } from "express";
import { type CreateUser, Sex, type UserQuery, type RequiredId, type UpdateUser } from "./interface.js";
import { UserService } from "./service.js";
import { wrapAsync } from "./utils/wrapAsync.js";

export class UserController {
    static createUser = wrapAsync(async (req: Request, res: Response): Promise<void> => {
        const userData: CreateUser = req.body;
        const newUser = await UserService.createUser(userData);
        res.status(201).json(newUser);
    });

    static getUsersByQuery = wrapAsync(async (req: Request, res: Response): Promise<void> => {
        const userQuery: UserQuery = {};
        req.query.name ? (userQuery.name = String(req.query.name)) : null;
        req.query.age ? (userQuery.age = Number(req.query.age)) : null;
        req.query.sex ? (userQuery.sex = String(req.query.sex) as Sex) : null;
        const users = await UserService.getUsers(userQuery);
        res.status(200).json(users);
    });

    static updateUser = wrapAsync(async (req: Request, res: Response): Promise<void> => {
        const id: RequiredId = req.params.id as unknown as RequiredId;
        const userData: UpdateUser = req.body;
        const updatedUser = await UserService.updateUser(id, userData);
        res.status(200).json(updatedUser);
    });

    static deleteUser = wrapAsync(async (req: Request, res: Response): Promise<void> => {
        const id: RequiredId = req.params.id as unknown as RequiredId;
        const deletedUser = await UserService.deleteUser(id);
        res.status(200).send(deletedUser);
    });
}
