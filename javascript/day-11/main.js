import { getNeurons } from "./api.js";
import { createNeuron } from "./neuron.js";
import { analyzeNeurons } from "./analyzer.js";
import { isValidNeuron } from "./validator.js";

const main = async () => {
    try {
        const responseData = await getNeurons();

        if (!Array.isArray(responseData.msg)) {
            throw new Error("Invalid API data");
        }

        const neurons = responseData.msg
            .map(createNeuron)
            .filter(isValidNeuron);

        const report = analyzeNeurons(neurons);

        console.log(report);

    } catch (error) {
        console.log(
            "Neuron Analyzer Error:",
            error.message
        );
    }
};

main();