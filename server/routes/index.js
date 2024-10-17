import express from "express";
import blogRouter from "./v1/blogRoutes.js";
import uploadRouter from "./v1/uploadRoutes.js";

const router = express.Router();
router.use('/blog',blogRouter)
router.use('/upload',uploadRouter)

export default router;