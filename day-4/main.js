const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: "-55" },
    { name: "Neuron C", potential: -60, threshold: -55 }
];
class InvalidNeuronError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidNeuronError";
    }
}
const validateNeuron = neuron => {
    if (
        typeof neuron.potential !== "number" ||
        typeof neuron.threshold !== "number" ||
        typeof neuron.name !== "string" 
    ) {

        throw new InvalidNeuronError(
            "Neuron potential and threshold must be numbers And Neuron name must be a string"
        );

    }
    return true;
};

const validateNeurons = neurons => {
    const validationResults = [];

    neurons.forEach(neuron => {

        try {
            validateNeuron(neuron);
            console.log(neuron.name, "is valid");
            validationResults.push(`${neuron.name}: Valid`);

        } catch (error) {
            if (error instanceof InvalidNeuronError) {
                console.log(neuron.name, "is Invalid");
                validationResults.push(`${neuron.name}: Invalid`);
            }
            else {
                console.log(`Unknown error: ${error.message}`);
            }
        }
    });
    return validationResults;
};
const results = validateNeurons(neurons);

console.log(results);