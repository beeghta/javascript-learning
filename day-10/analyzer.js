const analyzeNeurons = neurons => {
    const firingNeurons = neurons.filter(
        neuron => neuron.firingRate >= 3
    );

    const sortedNeurons = [...neurons].sort(
        (a, b) => b.firingRate - a.firingRate
    );

    const totalFiringRate = neurons.reduce(
        (sum, neuron) => sum + neuron.firingRate,
        0
    );

    const averageFiringRate =
        neurons.length > 0
            ? totalFiringRate / neurons.length
            : 0;

    const highestFiringNeuron = sortedNeurons[0];
    const lowestFiringNeuron = sortedNeurons[sortedNeurons.length - 1];

    return {
        numberOfNeurons: neurons.length,
        numberOfFiringNeurons: firingNeurons.length,
        averageFiringRate,
        highestFiringNeuron,
        lowestFiringNeuron,
        sortedNeurons
    };
};
export {
    analyzeNeurons
};