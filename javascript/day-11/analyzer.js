const getFiringNeurons = neurons => {
    return neurons.filter(
        neuron => neuron.isFiring()
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

    const firingNeurons =
        getFiringNeurons(neurons);

    const sortedNeurons =
        sortNeuronsByFiringRate(neurons);

    const averageFiringRate =
        calculateAverageFiringRate(neurons);

    return {
        numberOfNeurons: neurons.length,
        numberOfFiringNeurons: firingNeurons.length,
        averageFiringRate,
        highestFiringNeuron: sortedNeurons[0],
        lowestFiringNeuron: sortedNeurons[sortedNeurons.length - 1],
        sortedNeurons
    };
};

export {
    analyzeNeurons,
    getFiringNeurons,
    sortNeuronsByFiringRate,
    calculateAverageFiringRate
};