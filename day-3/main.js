
const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 },
    { name: "Neuron D", potential: -40, threshold: -55 },
    { name: "Neuron E", potential: -55, threshold: -55 }
];


const hasFiringNeuron = neurons.some(
    neuron => neuron.potential >= neuron.threshold
);

const allFiring = neurons.every(
    neuron => neuron.potential >= neuron.threshold
);