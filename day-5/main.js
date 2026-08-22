const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 },
    { name: "Neuron D", potential: -40, threshold: -55 },
    { name: "Neuron E", potential: -55, threshold: -55 }
];
const processNeurons = (neurons, operation) => {
    return neurons.map(operation);
};
const stimulatedNeurons = processNeurons(
    neurons,
    neuron => {
        return {
            ...neuron,
            potential: neuron.potential + 10
        };
    }
);

console.log(stimulatedNeurons);

const neuronStrings = processNeurons(
    neurons,
    neuron => `${neuron.name}: potential=${neuron.potential}, threshold=${neuron.threshold}`
);

console.log(neuronStrings);

const firingStatus = processNeurons(
    neurons,
    neuron => {
        return {
            name: neuron.name,
            isFiring: neuron.potential >= neuron.threshold
        };
    }
);

console.log(firingStatus);