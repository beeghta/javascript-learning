import { readNeurons, writeNeurons } from "../models/neuronModel.js";

const generateNeuronId = (neurons) => {
    if (neurons.length === 0) {
        return 1;
    }

    const maxId = Math.max(...neurons.map(neuron => neuron.id));
    return maxId + 1;
};
const searchNeurons = async (minActivity, sort) => {
    const neurons = await readNeurons();

    let result = neurons.filter(
        neuron => neuron.activity >= minActivity
    );

    if (sort === "activity") {
        result.sort((a, b) => a.activity - b.activity);
    }

    if (sort === "-activity") {
        result.sort((a, b) => b.activity - a.activity);
    }

    return result;
};
const getAllNeurons = async(page,limit) => {
    
    const neurons = await readNeurons();
    const start = (page - 1) * limit;

    const result = neurons.slice(
        start,
        start + limit
    );
    return result;
};

const getNeuronById = async (id) => {
    const neurons = await readNeurons();

    return neurons.find(neuron => neuron.id === id);
};

const getNeuronStatus = async (id) => {
    const neurons = await readNeurons();

    const neuron = neurons.find(neuron => neuron.id === id);

    if (!neuron) {
        return null;
    }

    return {
        name: neuron.name,
        status: neuron.activity >= 0.8 ? "firing" : "inactive"
    };
};

const createNeuron = async (name, activity) => {
    const neurons = await readNeurons();

    const newNeuron = {
        id: generateNeuronId(neurons),
        name,
        activity
    };

    neurons.push(newNeuron);

    await writeNeurons(neurons);

    return newNeuron;
};

const updateNeuron = async (id, name, activity) => {
    const neurons = await readNeurons();

    const neuron = neurons.find(neuron => neuron.id === id);

    if (!neuron) {
        return null;
    }

    neuron.name = name;
    neuron.activity = activity;

    await writeNeurons(neurons);

    return neuron;
};

const deleteNeuron = async (id) => {
    const neurons = await readNeurons();

    const index = neurons.findIndex(neuron => neuron.id === id);

    if (index === -1) {
        return null;
    }

    const deletedNeuron = neurons.splice(index, 1)[0];

    await writeNeurons(neurons);

    return deletedNeuron;
};
const getFiringNeurons = async () => {
    const neurons = await readNeurons();

    return neurons.filter(
        neuron => neuron.activity >= 0.8
    );
};
export {
    getAllNeurons,
    getNeuronById,
    getNeuronStatus,
    createNeuron,
    updateNeuron,
    deleteNeuron,
    getFiringNeurons,
    searchNeurons
};