// Day 1 — JavaScript Fundamentals

const threshold = -55;

const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 },
    { name: "Neuron D", potential: -40, threshold: -55 },
    { name: "Neuron E", potential: -55, threshold: -55 }
];


// 1. for...of + if/else

const activeNeurons = [];
const inactiveNeurons = [];

let totalFiringPotential = 0;
let numberOfFiringNeurons = 0;

for (const neuron of neurons) {
    if (neuron.potential >= threshold) {
        console.log(neuron.name, "fires!");

        activeNeurons.push(neuron);
        totalFiringPotential += neuron.potential;
        numberOfFiringNeurons += 1;
    } else {
        console.log(neuron.name, "does not fire.");

        inactiveNeurons.push(neuron);
    }
}

console.log("Active neurons:", activeNeurons);
console.log("Inactive neurons:", inactiveNeurons);
console.log("Total firing potential:", totalFiringPotential);
console.log("Number of firing neurons:", numberOfFiringNeurons);


// 2. Function + filter()

function isFiring(potential, threshold) {
    return potential >= threshold;
}

const firingNeurons = neurons.filter(function (neuron) {
    return isFiring(neuron.potential, neuron.threshold);
});

console.log("Firing neurons:", firingNeurons);


// 3. map()

const firingNames = firingNeurons.map(function (neuron) {
    return neuron.name;
});

console.log("Firing neuron names:", firingNames);


// 4. reduce()

const totalPotential = firingNeurons.reduce(function (sum, neuron) {
    return sum + neuron.potential;
}, 0);

console.log("Total potential using reduce:", totalPotential);


// 5. find()

const firstFiringNeuron = neurons.find(function (neuron) {
    return isFiring(neuron.potential, neuron.threshold);
});

console.log("First firing neuron:", firstFiringNeuron);