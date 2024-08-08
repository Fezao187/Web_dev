import { config } from "dotenv";
import jwt from "jsonwebtoken";
import express from "express";
import { User } from "../models/User.js";

config();
// Check if user has access to route
export const userVerification = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    let token: string;

    interface JwtPayload {
        id: string
    }

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];
            // Verify token
            const { id } = jwt.verify(token, process.env.TOKEN_KEY) as JwtPayload;
            // Get user from token
            req.body.user = await User.findById(id).select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401)
                .json({ message: "Not authorized" });
        }
    }
    if (!token) {
        return res.status(401)
            .json({ message: "Token not found, not authorized" })
    }
}