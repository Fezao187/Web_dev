import express from 'express';
import { User } from '../models/User.js';

// Edit profile
export const editProfile = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // Get ID from middleware
        const userId = req.body.user.id;
        // Update profile
        const result = await User.findByIdAndUpdate(userId, req.body);
        if (!result) {
            return res.status(404)
                .json({
                    message: "User not found"
                })
        }
        next();
        return res.status(200)
            .json({ message: "Profile updated successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
}

export const getProfile = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // get ID from params
        const { id } = req.params;
        // FInd profile by ID
        const profile = await User.findById(id);
        res.status(201)
            .json(profile);
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500)
            .send({ message: error.message });
    }
}