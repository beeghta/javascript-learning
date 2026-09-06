import express from "express";
import validateNeuron from "../middleware/validateNeuron.js";
import { getAllNeurons, getNeuronById, getFiringNeurons, getNeuronStatus, createNeuron, updateNeuron, deleteNeuron, testError } from "../controllers/neuronController.js";

const router = express.Router();

router.use((request, response, next) => {
    console.log(`Neuron Request: ${request.method} ${request.url}`);
    next();
});

router.get("/", getAllNeurons);

router.get("/test-error", testError);

router.get("/firing", getFiringNeurons);

router.get("/:id/status", getNeuronStatus);

router.get("/:id", getNeuronById);

router.post("/", validateNeuron, createNeuron);

router.put("/:id", validateNeuron, updateNeuron);
 
router.delete("/:id", deleteNeuron);

export default router;