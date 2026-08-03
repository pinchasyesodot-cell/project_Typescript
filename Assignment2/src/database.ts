import { envVars } from "./env.js";
import { connect, model, Schema } from "mongoose";
import { Sex, type User } from "./interface.js";

const MONGO_URI = envVars.MONGO_URI;

class Database {
    public connect = async (): Promise<void> => {
        try {
            await connect(MONGO_URI);
            console.log("Connected to MongoDB successfully");
        } catch (error) {
            throw error;
        }
    };
    public ModelUser = new Schema<User>(
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
            sex: { type: String, enum: Object.values(Sex), required: true },
        },
        {
            timestamps: true,
            toJSON: {
                transform: (_doc, ret: Record<string, any>, options: Record<string, any>) => {
                    delete ret.__v;
                    delete ret.updatedAt;
                    if (!options.keepCreatedAt) {
                        delete ret.createdAt;
                    }
                    return ret;
                },
            },
        }
    );
}

const dataBase = new Database();
export default dataBase;
export const UserModel = model<User>("User", dataBase.ModelUser);
