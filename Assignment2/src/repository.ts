import type { ToObjectOptions } from "mongoose";
import { UserModel } from "./database.js";
import type { CreateUser, RequiredId, ReturnDeletedUser, ReturnUser, UpdateUser, UserQuery } from "./interface.js";
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
    
    static updateUser = async (id: RequiredId, userData: UpdateUser): Promise<ReturnUser> => {
        try {
            const updatedUser = (await UserModel.findByIdAndUpdate(id, userData, { returnDocument: "after" }).select(
                "-__v -createdAt -updatedAt"
            )) as ReturnUser;
            if (!updatedUser) {
                throw new NotFound("User not found");
            }
            return updatedUser;
        } catch (error) {
            if (error instanceof NotFound) {
                throw error;
            }
            throw new AppError(`Failed to update user: ${(error as Error).message}`, 500);
        }
    };

    static deleteUser = async (id: RequiredId): Promise<ReturnDeletedUser> => {
        try {
            const deletedDoc = await UserModel.findByIdAndDelete(id).select("-__v -updatedAt");
            if (!deletedDoc) {
                throw new NotFound("User not found");
            }
            const deleteUser = deletedDoc.toJSON({ keepCreatedAt: true } as ToObjectOptions & {
                keepCreatedAt: boolean;
            });
            return deleteUser as ReturnDeletedUser;
        } catch (error) {
            if (error instanceof NotFound) {
                throw error;
            }
            throw new AppError(`Failed to delete user: ${(error as Error).message}`, 500);
        }
    };
}
