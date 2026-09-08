import express from "express";
import neuronRoutes from "./routes/neuronRoutes.js";
import logger from "./middleware/logger.js";
import "dotenv/config";
import cors from "cors";
import config from "./config/config.js";
import db from "./database/database.js";
const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Welcome to Neuron API");
});

app.use("/api/v1/neurons", neuronRoutes);

app.use((error, request, response, next) => {

    console.error(error.message);

    const statusCode = error.statusCode || 500;

    response.status(statusCode).json({
        success: false,
        error: error.message
    });
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

