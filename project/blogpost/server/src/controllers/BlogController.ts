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

// Get blog post
export const getBlogpostById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Get ID from params
        const { id } = req.params;
        // FInd nlogpost by ID
        const blog = await Blogpost.findById(id);
        res.status(201)
            .json(blog);
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500)
            .send({ message: error.message });
    }
}

// Get all blogs
export const getAllBlogs = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Get all blogposts
        const blogs = await Blogpost.find({});
        res.status(201)
            .json({
                message: "All blogs retrived",
                data: blogs
            });
        next();
    } catch (error) {
        console.log(error.message);
    }
}

// Get User blogs
export const getUserBlogs = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const blogs = await Blogpost.find({ creator: req.body.user.id });
        res.status(200)
            .json({
                message: "Retrived all my blogposts",
                blogs
            });
        next();
    } catch (error) {
        console.log(error);
    }
}

// Edit blog
export const editBlog = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    // Check if all fields are filled in
    try {
        if (!req.body.title || !req.body.body) {
            return res.status(400)
                .send({
                    message: "Send all required fields"
                });
        }

        // Get id from params
        const { id } = req.params;
        // Update blog
        const result = await Blogpost.findByIdAndUpdate(id, {
            title: req.body.title,
            body: req.body.body
        });

        if (!result) {
            return res.status(404)
                .json({
                    message: "Blogpost not found"
                });
        }
        next();
        return res.status(200)
            .json({ message: "Blogpost updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
}

// Delete blog
export const deleteBlogpost = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // get id from params
        const { id } = req.params;
        // Use ID to delete blogpost
        const result = await Blogpost.findByIdAndDelete(id);

        if (!result) {
            return res.status(404)
                .json({ message: "Blogpost not found" });
        }
        next();
        return res.status(200)
            .send({ message: "Blog deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}