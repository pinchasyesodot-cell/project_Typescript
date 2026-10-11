import { z } from "zod";
import { type CreateUser, Sex } from "./interface.js";

export const userSchema = z.object({
    name: z
        .string("name must be a string")
        .min(2, "name must be at least 2 characters long")
        .max(20, "name must be at most 20 characters long")
        .trim(),
    age: z.coerce
        .number("age number must be a number")
        .int("age number must be an integer")
        .min(1, "age number must be a positive integer")
        .max(120, "age number must be between 1 and 120"),
    sex: z.enum(Sex, { message: "sex must be 'male' or 'female' " }),
}) satisfies z.ZodType<CreateUser>;

export const idSchema = z.object({
    id: z.string().regex(/^[0-9a-fA-F]{24}$/, "id must be a valid MongoDB ObjectId"),
});

export const userQuerySchema = userSchema.partial();
export const updateUserSchema = userSchema.partial();
