import { config } from "dotenv";
import jwt from "jsonwebtoken";
import express from "express";
import { User } from "../models/User.js";

config();
// Check if user has access to route
export const userVerification = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({
            status: false,
            message: "Token not found"
        });
    }
    // Check if token match
    jwt.verify(token,
        process.env.TOKEN_KEY,
        async (err: jwt.VerifyErrors, data: jwt.JwtPayload) => {
            if (err) {
                return res.json({
                    status: false,
                    message: err
                });
            } else {
                const user = await User.findById(data.id);
                if (user) {
                    req.body.user = user;
                    next();
                    return res.json({
                        status: true,
                        user: user.username
                    });
                } else {
                    return res.json({
                        status: false,
                        message: "Tokens don't match"
                    });
                }
            }
        }
    )
}