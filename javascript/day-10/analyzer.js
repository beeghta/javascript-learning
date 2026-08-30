const FIRING_RATE_THRESHOLD = 3;

const getFiringNeurons = neurons => {
    return neurons.filter(
        neuron => neuron.firingRate >= FIRING_RATE_THRESHOLD
    );
};

const sortNeuronsByFiringRate = neurons => {
    return [...neurons].sort(
        (a, b) => b.firingRate - a.firingRate
    );
};

const calculateAverageFiringRate = neurons => {
    if (neurons.length === 0) {
        return 0;
    }

    const totalFiringRate = neurons.reduce(
        (sum, neuron) => sum + neuron.firingRate,
        0
    );

    return totalFiringRate / neurons.length;
};

const analyzeNeurons = neurons => {
    const firingNeurons = getFiringNeurons(neurons);

    const sortedNeurons = sortNeuronsByFiringRate(neurons);

    const averageFiringRate =
        calculateAverageFiringRate(neurons);

    return {
        numberOfNeurons: neurons.length,
        numberOfFiringNeurons: firingNeurons.length,
        averageFiringRate,
        highestFiringNeuron: sortedNeurons[0],
        lowestFiringNeuron:
            sortedNeurons[sortedNeurons.length - 1],
        sortedNeurons
    };
};

export {
    analyzeNeurons,
    getFiringNeurons,
    sortNeuronsByFiringRate,
    calculateAverageFiringRate
};