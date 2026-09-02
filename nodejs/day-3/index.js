
import { error } from "console";
import fs from "fs";
const data = fs.readFile("neurons.json", "utf-8", (error, data) => {
    if (error) {
        console.log("Error:", error);
        return;
    }
    const neurons = JSON.parse(data);
    console.log("Reading neurons...");
    const firingNeurons = neurons.filter(neuron => neuron.activity >= 0.8);
    const firingNames = firingNeurons.map(neuron => neuron.name).join("\n");
    fs.writeFile("neurons-report.txt", firingNames, "utf-8", (error) => {
        if (error) {
            console.log("Error Writing report:", error);
            return;
        }
        console.log("Neuron report created.");

    });

    console.log("Firing neurons:", firingNames);
    console.log("Loading neurons data...");
    console.log(data);
    const maxId = Math.max(...neurons.map(neuron => neuron.id));
    const newNeuron = {
        id: maxId + 1,
        name: "Neuron Delta",
        activity: 0.88
    };
    neurons.push(newNeuron);
    fs.writeFileSync("neurons.json", JSON.stringify(neurons, null, 2));

    console.log("Initial neuron count:", neurons.length);
});



