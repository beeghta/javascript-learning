const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 },
    { name: "Neuron D", potential: -40, threshold: -55 },
    { name: "Neuron E", potential: -55, threshold: -55 }
];

const isFiring = (potential, threshold) =>
    potential >= threshold;

const getFiringNeurons = (neurons) => {
    return neurons.filter(
        neuron => isFiring(neuron.potential, neuron.threshold)
    );
};

const firingNeurons = getFiringNeurons(neurons);

const firingNames = firingNeurons.map(
    neuron => neuron.name
);

const totalPotential = firingNeurons.reduce(
    (sum, neuron) => sum + neuron.potential,
    0
);

console.log(firingNames, totalPotential);