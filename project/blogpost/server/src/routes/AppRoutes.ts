import { Router } from "express";
import { Login, Signup } from "../controllers/AuthController.js";
import {
    CreateBlog,
    deleteBlogpost,
    editBlog,
    getAllBlogs,
    getBlogpostById,
    getUserBlogs
} from "../controllers/BlogController.js";
import { userVerification } from "../middleware/AuthMiddleware.js";
import { editProfile, getProfile } from "../controllers/ProfileController.js";

const router = Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/create/blog", userVerification, CreateBlog);
router.get("/:id", userVerification, getBlogpostById);
router.get("/", getAllBlogs);
router.put("/:id", userVerification, editBlog);
router.delete("/:id", userVerification, deleteBlogpost);
router.get("/myBlogs", userVerification, getUserBlogs);
router.put("/edit/profile", userVerification, editProfile);
router.get("/:id", getProfile);

export default router;