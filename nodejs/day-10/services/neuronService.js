import {
    getAllNeurons as getAllNeuronsFromDatabase,
    getNeuronById as getNeuronByIdFromDatabase,
    createNeuron as createNeuronInDatabase,
    updateNeuron as updateNeuronInDatabase,
    deleteNeuron as deleteNeuronFromDatabase,
    getFiringNeurons as getFiringNeuronsFromDatabase,
    getNeuronStatus as getNeuronStatusFromDatabase,
    searchNeurons as searchNeuronsFromDatabase,
    getNeuronCount as getNeuronCountFromDatabase
} from "../database/neuronDatabase.js";

const getAllNeurons = (page, limit) => {
    return getAllNeuronsFromDatabase(page, limit);
};

const getNeuronCount = () => {
    return getNeuronCountFromDatabase();
};

const getNeuronById = (id) => {
    return getNeuronByIdFromDatabase(id);
};

const createNeuron = (name, activity) => {
    return createNeuronInDatabase(name, activity);
};
const updateNeuron = (id, name, activity) => {
    return updateNeuronInDatabase(id, name, activity);
};

const deleteNeuron = (id) => {
    return deleteNeuronFromDatabase(id);
};

const getFiringNeurons = () => {
    return getFiringNeuronsFromDatabase();
};

const searchNeurons = (minActivity, sort) => {
    return searchNeuronsFromDatabase(minActivity, sort);
};

const getNeuronStatus = (id) => {
    return getNeuronStatusFromDatabase(id);
};

export {
    getAllNeurons,
    getNeuronById,
    getNeuronStatus,
    createNeuron,
    updateNeuron,
    deleteNeuron,
    getFiringNeurons,
    searchNeurons,
    getNeuronCount
};