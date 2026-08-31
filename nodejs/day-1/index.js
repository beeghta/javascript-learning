const neurons = [
    {
        id: 1,
        name: "Neuron Alpha",
        activity: 0.95
    },
    {
        id: 2,
        name: "Neuron Beta",
        activity: 0.72
    },
    {
        id: 3,
        name: "Neuron Gamma",
        activity: 0.31
    }
];
console.log("Neuron count:", neurons.length);
neurons.forEach(neuron => {
    console.log(neuron.name, "- Activity:", neuron.activity);
});

import fs from "fs";
fs.writeFileSync(
    "neuron.txt",
    "Neuron Alpha - Activity: 0.95"
);

console.log("Neuron data saved.");

import path from "path";
const neuron = {
    id: 1,
    name: "Neuron Alpha",
    activity: 0.95
};
const filepath = path.join(
    process.cwd(),
    "neuron.jason"
);
fs.writeFileSync(
    filepath,
    JSON.stringify(neuron, null, 2)

);
console.log("Neuron saved to:", filepath);