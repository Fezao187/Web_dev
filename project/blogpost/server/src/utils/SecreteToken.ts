import { config } from "dotenv";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

config();
export const createSecretToken = (id: mongoose.Types.ObjectId) => {
    return jwt.sign(
        { id },
        process.env.TOKEN_KEY,
        { expiresIn: 3 * 24 * 60 * 60 }
    );
};