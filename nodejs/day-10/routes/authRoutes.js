import express from "express";

import {
    login
} from "../auth/authController.js";

const router = express.Router();

router.post(
    "/login",
    login
);

export default router;