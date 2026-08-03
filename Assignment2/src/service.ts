import type { CreateUser, ReturnUser, UserQuery } from "./interface.js";
import { UserRepository } from "./repository.js";

export class UserService {
    static createUser = async (user: CreateUser): Promise<ReturnUser> => {
        try {
            const newUser = await UserRepository.createUser(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    };

    static getUsers = async (userQuery: UserQuery) => {
        try {
            const users = await UserRepository.getUsers(userQuery);
            return users;
        } catch (error) {
            throw error;
        }
    };

}