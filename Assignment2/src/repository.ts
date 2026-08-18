import type { ToObjectOptions } from "mongoose";
import { UserModel } from "./database.js";
import type { CreateUser, RequiredId, ReturnDeletedUser, ReturnUser, UpdateUser, UserQuery } from "./interface.js";

export class UserRepository {
    static createUser = async (user: CreateUser): Promise<ReturnUser> => {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser.toJSON() as ReturnUser;
    };

    static getUsers = async (userQuery: UserQuery): Promise<ReturnUser[] | []> => {
        const users = (await UserModel.find(userQuery).lean().select("-__v -createdAt -updatedAt")) as
            | ReturnUser[]
            | [];
        return users;
    };

    static updateUser = async (id: RequiredId, userData: UpdateUser): Promise<ReturnUser | null> => {
        const updatedUser = (await UserModel.findByIdAndUpdate(id, userData, { returnDocument: "after" })
            .lean()
            .select("-__v -createdAt -updatedAt")) as ReturnUser | null;
        return updatedUser;
    };

    static deleteUser = async (id: RequiredId): Promise<ReturnDeletedUser | null> => {
        const deletedDoc = (await UserModel.findByIdAndDelete(id)
            .lean()
            .select("-__v -updatedAt")) as ReturnDeletedUser | null;
        return deletedDoc;
    };
}
