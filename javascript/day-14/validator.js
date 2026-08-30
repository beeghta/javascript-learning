import { InvalidNeuronError } from "./Errors.js";
const isValidNeuron = neuron => {
    return (
        Boolean(neuron.name) &&
        Number.isFinite(neuron.firingRate) &&
        Number.isFinite(neuron.restingPotential)
    );
};

const validateNeuron = neuron => {

    if (typeof neuron.firingRate !== "number") {
        throw new InvalidNeuronError("Invalid firing rate");
    }

    if (typeof neuron.name !== "string") {
        throw new InvalidNeuronError("Invalid neuron name");
    }

    if (typeof neuron.restingPotential !== "number") {
        throw new InvalidNeuronError("Invalid resting potential");
    }

    return true;
};

export {
    isValidNeuron,
    validateNeuron
};