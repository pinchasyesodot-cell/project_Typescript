import type { ObjectId } from "mongoose";

export enum Sex {
    Male = "male",
    Female = "female",
}

export interface User {
    _id: ObjectId;
    name: string;
    age: number;
    sex: Sex;
    createdAt: Date;
    updatedAt: Date;
}

export type RequiredId = Pick<User, "_id">;
export type CreateUser = Omit<User, "_id" | "createdAt" | "updatedAt">;
export type ReturnUser = Omit<User, "createdAt" | "updatedAt">;
export type UserQuery = Partial<CreateUser>;
export type UpdateUser = Partial<CreateUser>;
export type ReturnDeletedUser = Omit<User, "updatedAt">;
