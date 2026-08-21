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

    const report = {
        firingNames,
        totalFiringPotential,
        firingStatuses,
        numberOfFiringNeurons: firingNeurons.length
    };

    return report;

};

export {
    isFiring,
    calculatePotential,
    getFiringStatus,
    analyzeNeurons
};