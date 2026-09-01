const { v4: uuidv4 } = require("uuid");
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
const newNeuron = {
    id: uuidv4(),
    name: "Neuron Delta",
    activity: 0.88
}

module.exports = { neurons, newNeuron };