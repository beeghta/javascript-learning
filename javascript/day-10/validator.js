const isValidNeuron = neuron => {
    return (
        typeof neuron === "object" &&
        neuron !== null &&
        typeof neuron.name === "string" &&
        neuron.name.trim().length > 0 &&
        Number.isFinite(neuron.firingRate) &&
        Number.isFinite(neuron.restingPotential)
    );
};

export {
    isValidNeuron
};