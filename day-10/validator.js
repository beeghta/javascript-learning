const isValidNeuron = neuron => {
    return (
        Boolean(neuron.name) &&
        Number.isFinite(neuron.firingRate) &&
        Number.isFinite(neuron.restingPotential)
    );
};

export {
    isValidNeuron
};