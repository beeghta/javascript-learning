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

neurons.forEach(neuron => {
    neuron.potential >= neuron.threshold
});

const totalPotentiale = neurons.reduce(
    (sum, neuron) => sum + neuron.potential,
    0
);
console.log(totalPotentiale);

const adjustedFiringPotentials = neurons
    .filter(neuron => neuron.potential >= neuron.threshold)
    .map(neuron => neuron.potential + 10).reduce((sum, potential) => sum + potential, 0);

console.log(adjustedFiringPotentials);




const firstFiring = neurons.find(neuron => neuron.potential >= neuron.threshold);
const { name, potential, threshold } = firstFiring;
console.log(name);
console.log(potential);
console.log(threshold);

const testNeuron = {
    name: "Neuron X",
    potential: -45,
    threshold: -55
};
const getNeuronInfo = ({ name, potential }) => {
    return `${name}: ${potential}`;
};
console.log(getNeuronInfo(testNeuron));
const neurons10 = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 }
];
const neuronInfo = neurons10.map(
    ({ name, potential }) => `${name}: ${potential}`  
);
console.log(neuronInfo);

const firiNeurons = [
    "Neuron B",
    "Neuron D"
];

const newFiringNeurons = [
    ...firiNeurons,
    "Neuron E"
];

console.log(newFiringNeurons);

const excitatoryNeurons = ["Neuron A", "Neuron B"];
const inhibitoryNeurons = ["Neuron C", "Neuron D"];
const allNeurons = [
    ...excitatoryNeurons,
    ...inhibitoryNeurons
];

console.log(allNeurons);

const originalNeuron = {
    name: "Neuron A",
    potential: -70,
    threshold: -55
};
const stimulatedNeuron = {
    ...originalNeuron,
    potential: -50,
    stimulus:20
};
console.log(stimulatedNeuron);

const calculateTotalPotential = (...potentials) => {
    return potentials.reduce((sum, potential) => sum + potential, 0);
    
};
console.log(calculateTotalPotential(-70, -50, -40));

const analyzePotentials2 = (firstPotential, ...otherPotentials) => {
    const otherTotal = otherPotentials.reduce(
        (sum, potential) => sum + potential,
        0
    );

    return firstPotential + otherTotal;
};
console.log(analyzePotentials2(-70, -50, -40, -30));

const analyzePotentials1 = (firstPotential, ...otherPotentials) => {
    console.log(firstPotential);
    console.log(otherPotentials);
};
analyzePotentials1(-70, -50, -40, -30);


const analyzePotentials = (firstPotential, ...otherPotentials) => {
    const total = otherPotentials.reduce(
        (sum, potential) => sum + potential,
        0
    );

    return firstPotential + total;
};
console.log(analyzePotentials(-70, -50, -40, -30));

const neuron13 = {
    name: "Neuron A",
    metadata: {
        type: "Excitatory"
    }
};

const neuron14 = {
    name: "Neuron B"
};
console.log(neuron13.metadata?.type);
console.log(neuron14.metadata?.type);

const neuron16 = {
    name: "Neuron C",
    metadata: {
        type: "Inhibitory"
    }
};

const neuron17 = {
    name: "Neuron D"
};
console.log(neuron16.metadata?.type ?? "Unknown");
console.log(neuron17.metadata?.type ?? "Unknown");

const stimulus1 = 0;
const stimulus2 = null;
const stimulus3 = 20;

console.log(stimulus1 ?? 10);
console.log(stimulus2 ?? 10);
console.log(stimulus3 ?? 10);