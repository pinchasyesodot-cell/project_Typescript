import type { CreateUser, RequiredId, ReturnDeletedUser, ReturnUser, UpdateUser, UserQuery } from "./interface.js";
import { UserRepository } from "./repository.js";
import { NotFound } from "./utils/AppError.js";

export class UserService {
    static createUser = async (user: CreateUser): Promise<ReturnUser> => {
        const newUser = await UserRepository.createUser(user);
        return newUser;
    };

    static getUsers = async (userQuery: UserQuery): Promise<ReturnUser[] | []> => {
        const users = await UserRepository.getUsers(userQuery);
        return users;
    };
    static updateUser = async (id: RequiredId, userData: UpdateUser): Promise<ReturnUser> => {
        const updatedUser = await UserRepository.updateUser(id, userData);
        if (!updatedUser) {
            throw new NotFound("User not found");
        }
        return updatedUser;
    };

    static deleteUser = async (id: RequiredId): Promise<ReturnDeletedUser> => {
        const deletedUser = await UserRepository.deleteUser(id);
        if (!deletedUser) {
            throw new NotFound("User not found");
        }
        return deletedUser;
    };
}
