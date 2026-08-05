import express, { type Application } from "express";
import { envVars } from "./env.js";
import dataBase from "./database.js";
import Router from "./router.js";
import { errorHandler } from "./middlewares/errorHandler.js";

class Server {
    constructor(
        public app: Application = express(),
        public port: number = envVars.PORT
    ) {
        this.initMiddlewares();
    }

    private initMiddlewares(): void {
        this.app.use(express.json());
        this.app.use("/api/user/", Router);
        this.app.use(errorHandler);
    }

    public start = async (): Promise<void> => {
        try {
            await dataBase.connect();
            this.app.listen(this.port, "0.0.0.0", () => {
                console.log(`server is runing on http://localhost:${this.port}`);
            });
        } catch (error) {
            console.error("Failed to start the server:", error);
            process.exit(1);
        }
    };
}

const server = new Server();
server.start();
