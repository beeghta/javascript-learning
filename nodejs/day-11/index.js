import express from "express";
import "dotenv/config";

import config from "./config/config.js";
import logger from "./middleware/logger.js";
import neuronRoutes from "./routes/neuronRoutes.js";

const app = express();

app.use(logger);
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Welcome to Neuron API");
});

app.use("/api/v1/neurons", neuronRoutes);

// Error handling
app.use((error, request, response, next) => {
    console.error(error.message);

    const statusCode = error.statusCode || 500;

    response.status(statusCode).json({
        success: false,
        error: error.message
    });
});

export default app;

if (process.env.NODE_ENV !== "test") {
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });
}