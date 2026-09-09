import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
    getUserByUsername
} from "../database/userDatabase.js";

const login = async (request, response) => {

    const {
        username,
        password
    } = request.body;

    const user = getUserByUsername(username);

    if (!user) {
        return response.status(401).json({
            success: false,
            error: "Invalid username or password"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        return response.status(401).json({
            success: false,
            error: "Invalid username or password"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    response.json({
        success: true,
        message: "Login successful",
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        }
    });
};

export {
    login
};