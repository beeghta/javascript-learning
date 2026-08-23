// Lexical Scope & Closure

const createNeuronName = () => {
    const name = "Neuron A";

    const getName = () => {
        return name;
    };

    return getName;
};

const neuronName = createNeuronName();

console.log("Neuron name:", neuronName());


// Closure — Private Counter

const createNeuronCounter = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const neuronCounter = createNeuronCounter();

console.log("Counter:", neuronCounter());
console.log("Counter:", neuronCounter());
console.log("Counter:", neuronCounter());

// Independent Closures

const firstNeuronCounter = createNeuronCounter();
const secondNeuronCounter = createNeuronCounter();

console.log("First counter:", firstNeuronCounter());
console.log("First counter:", firstNeuronCounter());

console.log("Second counter:", secondNeuronCounter());

// IIFE

(() => {
    const systemName = "Neuron Analyzer";

    console.log("System:", systemName);
})();

// IIFE + Private State

const neuronSystem = (() => {
    let processedCount = 0;

    return {
        process() {
            processedCount++;
            return processedCount;
        },

        getCount() {
            return processedCount;
        }
    };
})();

console.log("Processed:", neuronSystem.process());
console.log("Processed:", neuronSystem.process());
console.log("Total processed:", neuronSystem.getCount());

// IIFE + Private Array

const neuronTracker = (() => {
    const processedNeurons = [];

    return {
        add(neuronName) {
            processedNeurons.push(neuronName);
        },

        getAll() {
            return processedNeurons;
        }
    };
})();

neuronTracker.add("Neuron A");
neuronTracker.add("Neuron B");
neuronTracker.add("Neuron C");

console.log("Processed neurons:", neuronTracker.getAll());

// Neuron Data

const neurons = [
    { name: "Neuron A", potential: -70, threshold: -55 },
    { name: "Neuron B", potential: -50, threshold: -55 },
    { name: "Neuron C", potential: -60, threshold: -55 },
    { name: "Neuron D", potential: -40, threshold: -55 },
    { name: "Neuron E", potential: -55, threshold: -55 }
];

// Neuron Processing with Private State

const neuronProcessor = (() => {
    let processedCount = 0;

    return {
        process(neuron) {
            processedCount++;

            return {
                ...neuron,
                isFiring: neuron.potential >= neuron.threshold
            };
        },

        getProcessedCount() {
            return processedCount;
        }
    };
})();

const processedNeurons = neurons.map(
    neuron => neuronProcessor.process(neuron)
);

console.log("Processed neurons:", processedNeurons);
console.log(
    "Total processed:",
    neuronProcessor.getProcessedCount()
);