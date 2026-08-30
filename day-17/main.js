const sessionStorage = {
    _data: {},
    setItem(key, value) {
        this._data[key] = value;
    },
    getItem(key) {
        return this._data[key] || null;
    }
};
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


// ==============================
// Store neurons
// ==============================

sessionStorage.setItem(
    "neurons",
    JSON.stringify(neurons)
);


// ==============================
// Get neurons
// ==============================

const storedNeurons =
    sessionStorage.getItem("neurons");

const neuronsFromStorage =
    JSON.parse(storedNeurons);

console.log("Stored neurons:", neuronsFromStorage);


// ==============================
// Store last viewed neuron
// ==============================

sessionStorage.setItem(
    "lastNeuron",
    "Neuron Beta"
);


// ==============================
// Get last viewed neuron
// ==============================

const lastNeuron =
    sessionStorage.getItem("lastNeuron");

console.log(
    `Last viewed: ${lastNeuron}`
);