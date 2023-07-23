import 'dotenv/config';
import express from "express";
import { createUser } from "./controllers/user.controller";

export const app = express();

app.use(express.json());

app.post('/user', createUser);