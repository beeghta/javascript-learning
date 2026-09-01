const { getStatus, calculatePotentional } = require("./neuronFunctions.js");
const { neurons, newNeuron } = require("./neurons.js");

console.log(newNeuron);
neurons.forEach(neuron => {
    console.log(neuron.name, "-Activity:", neuron.activity, "-status:", getStatus(neuron.activity), "-Potentional:", calculatePotentional(neuron.activity));
});