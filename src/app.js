import 'dotenv/config';
import express from "express";
import userController from "./controllers/user.controller";

export const app = express();

app.use(express.json());

app.post('/user', userController.createUser);