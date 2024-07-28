import { Router } from "express";
import { Login, Signup } from "../controllers/AuthController.js";
import { CreateBlog } from "../controllers/BlogController.js";

const router = Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/create/blog", CreateBlog);

export default router;