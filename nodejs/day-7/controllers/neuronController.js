import AppError from "../errors/AppError.js";
import asyncHandler from "../middleware/asyncHandler.js";

import {
    getAllNeurons as getAllNeuronsService,
    getNeuronById as getNeuronByIdService,
    getNeuronStatus as getNeuronStatusService,
    createNeuron as createNeuronService,
    updateNeuron as updateNeuronService,
    deleteNeuron as deleteNeuronService
} from "../services/neuronService.js";


const getAllNeurons = asyncHandler(async (request, response) => {
    const neurons = await getAllNeuronsService();

    response.json(neurons);
});


const getNeuronById = asyncHandler(async (request, response, next) => {
    const id = Number(request.params.id);

    const neuron = await getNeuronByIdService(id);

    if (!neuron) {
        return next(new AppError("Neuron not found", 404));
    }

    response.json(neuron);
});


const getFiringNeurons = asyncHandler(async (request, response) => {
    const neurons = await getAllNeuronsService();

    const firingNeurons = neurons.filter(
        neuron => neuron.activity >= 0.8
    );

    response.json(firingNeurons);
});


const getNeuronStatus = asyncHandler(async (request, response, next) => {
    const id = Number(request.params.id);

    const status = await getNeuronStatusService(id);

    if (!status) {
        return next(new AppError("Neuron not found", 404));
    }

    response.json(status);
});


const createNeuron = asyncHandler(async (request, response) => {
    const { name, activity } = request.body;

    const newNeuron = await createNeuronService(
        name,
        activity
    );

    response.status(201).json(newNeuron);
});


const updateNeuron = asyncHandler(async (request, response, next) => {
    const id = Number(request.params.id);
    const { name, activity } = request.body;

    const updatedNeuron = await updateNeuronService(
        id,
        name,
        activity
    );

    if (!updatedNeuron) {
        return next(new AppError("Neuron not found", 404));
    }

    response.json(updatedNeuron);
});


const deleteNeuron = asyncHandler(async (request, response, next) => {
    const id = Number(request.params.id);

    const deletedNeuron = await deleteNeuronService(id);

    if (!deletedNeuron) {
        return next(new AppError("Neuron not found", 404));
    }

    response.json(deletedNeuron);
});


const testError = (request, response, next) => {
    const error = new AppError(
        "Neuron processing failed",
        500
    );

    next(error);
};


export {
    getAllNeurons,
    getNeuronById,
    getFiringNeurons,
    getNeuronStatus,
    createNeuron,
    updateNeuron,
    deleteNeuron,
    testError
};