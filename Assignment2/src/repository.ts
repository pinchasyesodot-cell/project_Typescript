import { UserModel } from "./database.js";
import type { CreateUser } from "./interface.js";
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

}
