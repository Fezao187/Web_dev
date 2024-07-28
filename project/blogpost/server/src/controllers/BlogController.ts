import express from "express";
import mongoose from "mongoose";
import { Blogpost } from "../models/Blogpost.js";

// Create blogpost
export const CreateBlog = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Check if all fields are sent
        if (!req.body.title || !req.body.body) {
            return res.status(400)
                .send({
                    message: "Send all required fields"
                });
        }

        // Create blog interface
        interface BlogInterface {
            title: string,
            body: string,
            username?: string,
            creator?: mongoose.Types.ObjectId
        }

        const user = req.body.user;
        // Create blog interface
        const blogObj: BlogInterface = {
            title: req.body.title,
            body: req.body.body,
            username: user.username,
            creator: user._id
        }

        // Save blogposts to DB
        const blog = await Blogpost.create(blogObj);
        res.status(201)
            .json({ message: "Blog post created successfully" });
        next();
    } catch (error) {
        console.log(error.message);
    }
}