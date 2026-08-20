const threshold = -55;
const neurons = [
    { name: "Neuron A", potential: -70 },
    { name: "Neuron B", potential: -50 },
    { name: "Neuron C", potential: -60 },
    { name: "Neuron D", potential: -40 },
    { name: "Neuron E", potential: -55 }
];
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
    }
    else {
        console.log(neuron.name, "does not fire.");
        inactiveNeurons.push(neuron);
    }

}
console.log("Firing neurons:", activeNeurons
    , "Total firing potential:", totalFiringPotential, "Number of firing neurons:", numberOfFiringNeurons);