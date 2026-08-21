const isFiring = (potential, threshold) => {
    return potential >= threshold;
};

const calculatePotential = (potential, stimulus) => {
    return potential + stimulus;
};

const getFiringStatus = neuron => {
    if (neuron.potential >= neuron.threshold) {
        return `${neuron.name}: Firing`;
    }
    return `${neuron.name}: No firing`;
};

const analyzeNeurons = (neurons) => {

    const firingNeurons = neurons.filter(
        neuron => isFiring(neuron.potential, neuron.threshold)
    );

    const firingNames = firingNeurons.map(
        neuron => neuron.name
    );

    const totalFiringPotential = firingNeurons.reduce(
        (sum, neuron) => sum + neuron.potential,
        0
    );

    const firingStatuses = neurons.map(
        neuron => getFiringStatus(neuron)
    );

    const hasFiringNeuron = neurons.some(
        neuron => isFiring(neuron.potential, neuron.threshold)
    );

    const allNeuronsFiring = neurons.every(
        neuron => isFiring(neuron.potential, neuron.threshold)
    );

    const sortedNeurons = [...neurons].sort(
        (a, b) => a.potential - b.potential
    );
    const sortedNeuronInfo = sortedNeurons.map(
        neuron => `${neuron.name}: ${neuron.potential}`
    );

    const report = {
        firingNames,
        totalFiringPotential,
        firingStatuses,
        numberOfFiringNeurons: firingNeurons.length,
        hasFiringNeuron,
        allNeuronsFiring,
        sortedNeurons,
        sortedNeuronInfo
    };

    return report;

};

export {
    isFiring,
    calculatePotential,
    getFiringStatus,
    analyzeNeurons
};