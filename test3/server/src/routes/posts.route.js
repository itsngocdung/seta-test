import express, { Router } from "express";
import { getPost } from "../controllers/posts.constroller.js";

const router = Router();

router.get("/", getPost);

export default router;
