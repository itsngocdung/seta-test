import express, { Router } from "express";
import postRoute from "./posts.route.js";

const router = Router();

router.use("/posts", postRoute);

export default router;
