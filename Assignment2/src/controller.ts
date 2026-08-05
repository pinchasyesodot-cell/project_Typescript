import type { NextFunction, Request, Response } from "express";
import { type CreateUser, Sex, type UserQuery, type RequiredId, type UpdateUser } from "./interface.js";
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

    static getUsersByQuery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userQuery: UserQuery = {};
            req.query.name ? (userQuery.name = String(req.query.name)) : null;
            req.query.age ? (userQuery.age = Number(req.query.age)) : null;
            req.query.sex ? (userQuery.sex = String(req.query.sex) as Sex) : null;
            const users = await UserService.getUsers(userQuery);
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    static updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: RequiredId = req.params.id as unknown as RequiredId;
            const userData: UpdateUser = req.body;
            const updatedUser = await UserService.updateUser(id, userData);
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    };

    static deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: RequiredId = req.params.id as unknown as RequiredId;
            const deletedUser = await UserService.deleteUser(id);
            res.status(200).send(deletedUser);
        } catch (error) {
            next(error);
        }
    };
}
