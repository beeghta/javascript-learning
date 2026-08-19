const neuronName = "Excitatory Neuron";
let membranePotential = -70;
const threshold = -55;
let stimulus = 20;
let newPotential = membranePotential + stimulus;


function checkShoot() {
    if (newPotential > threshold) {
        console.log("Strong firing!");
    } else if (newPotential === threshold) {
        console.log("Threshold reached.");
    } else {
        console.log("No firing");
    }
}
checkShoot();
console.log(newPotential);
console.log(neuronName);
