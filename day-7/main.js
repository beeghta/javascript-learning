const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -40, threshold: -55 }
];

const simulateNeuron = neuron => {
    console.log(`${neuron.name} is being checked...`);

    if (neuron.potential >= neuron.threshold) {
        setTimeout(() => {
            console.log(`${neuron.name} fired!`);
        }, 1000);
    } else {
        setTimeout(() => {
            console.log(`${neuron.name} did not fire.`);
        }, 2000);
    }
};

console.log("Neuron simulation started");

neurons.forEach(neuron => {
    simulateNeuron(neuron);
});

console.log("Neuron simulation finished");