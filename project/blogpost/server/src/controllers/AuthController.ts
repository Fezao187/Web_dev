import express from 'express';
import { User } from '../models/User.js';
import { createSecretToken } from '../utils/SecreteToken.js';
import bcrypt from "bcrypt";

// Create a signup function
export const Signup = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Get all variables from the body
        const { name, email, username, password } = req.body;
        const checkEmail = await User.findOne({ email });
        const checkUsername = await User.findOne({ username });
        // Check if user exists
        if (checkEmail || checkUsername) {
            return res.json({ message: "User already exists" });
        }
        // If user does not exist, the create user
        const user = await User.create({ name, email, username, password });
        // Generate token using id
        const token = createSecretToken(user._id);
        // Send cookie with a key
        res.cookie("token", token);
        res.status(201)
            .json({
                message: "User signed up successfully",
                success: true,
                user
            });
        next();
    } catch (error) {
        console.log(error);
    }
}

// Login function
export const Login = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Get all variables from the body
        const { email, password } = req.body;
        // Check if all fields are filled in
        if (!email || !password) {
            return res.json({ message: "All fields are required" })
        }
        // Check if email exist on DB
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "Incorrect password or email" });
        }
        // Check if passwords match
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: "Password or email is incorrect" });
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token);
        res.status(201)
            .json({
                message: "User logged in successfully",
                success: true
            });
        next();
    } catch (error) {
        console.error(error);
    }
}