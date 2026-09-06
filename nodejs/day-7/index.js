import express from "express";
import neuronRoutes from "./routes/neuronRoutes.js";
import logger from "./middleware/logger.js";

const app = express();

const PORT = 3000;

app.use(logger);
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Welcome to Neuron API");
});

app.use("/neurons", neuronRoutes);

app.use((error, request, response, next) => {

    console.error(error.message);

    const statusCode = error.statusCode || 500;

    response.status(statusCode).json({
        error: error.message
    });
});

app.listen(PORT, () => {
    console.log(`Neuron API running on port ${PORT}`);
});

