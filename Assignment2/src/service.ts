import type { CreateUser, ReturnUser } from "./interface.js";
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

}