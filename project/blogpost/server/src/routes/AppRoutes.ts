import { Router } from "express";
import { Login, Signup } from "../controllers/AuthController.js";
import { CreateBlog, deleteBlogpost, editBlog, getAllBlogs, getBlogpostById } from "../controllers/BlogController.js";
import { userVerification } from "../middleware/AuthMiddleware.js";

const router = Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/create/blog", userVerification, CreateBlog);
router.get("/:id", getBlogpostById);
router.get("/", getAllBlogs);
router.put("/:id", editBlog);
router.delete("/:id", deleteBlogpost);

export default router;