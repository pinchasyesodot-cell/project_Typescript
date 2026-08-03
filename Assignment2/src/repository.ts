import type { ToObjectOptions } from "mongoose";
import { UserModel } from "./database.js";
import type { CreateUser, ReturnUser, UserQuery } from "./interface.js";
import { AppError, NotFound } from "./utils/AppError.js";

export class UserRepository {
    static createUser = async (user: CreateUser): Promise<ReturnUser> => {
        try {
            const newUser = new UserModel(user);
            await newUser.save();
            return newUser.toJSON() as ReturnUser;
        } catch (error) {
            throw new AppError(`Failed to create user: ${(error as Error).message}`, 500);
        }
    };

    static getUsers = async (userQuery: UserQuery): Promise<ReturnUser[]> => {
        try {
            const users = (await UserModel.find(userQuery).select("-__v -createdAt -updatedAt")) as ReturnUser[];
            if (users.length === 0) {
                throw new NotFound("No users found");
            }
            return users;
        } catch (error) {
            if (error instanceof NotFound) {
                throw error;
            }
            throw new AppError(`Failed to get users: ${(error as Error).message}`, 500);
        }
    };

}
