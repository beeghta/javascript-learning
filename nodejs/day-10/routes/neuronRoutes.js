import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import requireRole from "../middleware/requireRole.js";
import validateNeuron from "../middleware/validateNeuron.js";

import {
    getAllNeurons,
    getNeuronById,
    getFiringNeurons,
    getNeuronStatus,
    searchNeurons,
    createNeuron,
    updateNeuron,
    deleteNeuron,
    testError
} from "../controllers/neuronController.js";

const router = express.Router();

router.use((request, response, next) => {

    console.log(
        `Neuron Request: ${request.method} ${request.originalUrl}`
    );

    next();
});

router.get(
    "/",
    authMiddleware,
    getAllNeurons
);

router.get(
    "/firing",
    authMiddleware,
    getFiringNeurons
);


router.get(
    "/search",
    authMiddleware,
    searchNeurons
);


router.get(
    "/:id/status",
    authMiddleware,
    getNeuronStatus
);


router.get(
    "/:id",
    authMiddleware,
    getNeuronById
);



router.post(
    "/",
    authMiddleware,
    requireRole("admin"),
    validateNeuron,
    createNeuron
);


router.put(
    "/:id",
    authMiddleware,
    requireRole("admin"),
    validateNeuron,
    updateNeuron
);


router.delete(
    "/:id",
    authMiddleware,
    requireRole("admin"),
    deleteNeuron
);


router.get(
    "/test-error",
    testError
);


export default router;