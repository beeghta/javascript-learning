import fs from "fs/promises";
/////////// then catch
const data = fs.readFile("neurons.json", "utf-8");

data.then(data => {
    const neurons = JSON.parse(data);
    const FirinNeurons = neurons.filter(neuron => neuron.activity >= 0.7);
    console.log(FirinNeurons);
})
    .catch(error => { console.log(error); });

///////////async await
async function LoadNeuron() {
    try {
        const newdata = await fs.readFile("neurons.json", "utf-8");
        const newneurons = JSON.parse(newdata);
        const FirinNeuronsName = newneurons.filter(neuron => neuron.activity >= 0.8).map(neuron => neuron.name + " -Activity: " + neuron.activity);
        console.log(FirinNeuronsName);
    } catch (error) {
        console.log("Errors", error);
    }
}
LoadNeuron();
