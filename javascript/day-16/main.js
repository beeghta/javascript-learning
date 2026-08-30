
// ==========================================
// NEURON DASHBOARD
// this + Closure + Higher-Order Function
// Callback + Event Loop
// ==========================================


// ==========================================
// 1. Neuron Objects + this
// ==========================================

const neurons = [
    {
        name: "Neuron Alpha",
        activity: 0.95,

        getStatus() {
            if (this.activity >= 0.8) {
                return "Highly Active";
            }

            if (this.activity >= 0.5) {
                return "Active";
            }

            return "Inactive";
        },

        showInfo() {
            console.log(
                `${ this.name } - Activity: ${ this.activity } - Status: ${ this.getStatus() } `
            );
        }
    },

    {
        name: "Neuron Beta",
        activity: 0.72,

        getStatus() {
            if (this.activity >= 0.8) {
                return "Highly Active";
            }

            if (this.activity >= 0.5) {
                return "Active";
            }

            return "Inactive";
        },

        showInfo() {
            console.log(
                `${ this.name } - Activity: ${ this.activity } - Status: ${ this.getStatus() } `
            );
        }
    },

    {
        name: "Neuron Gamma",
        activity: 0.31,

        getStatus() {
            if (this.activity >= 0.8) {
                return "Highly Active";
            }

            if (this.activity >= 0.5) {
                return "Active";
            }

            return "Inactive";
        },

        showInfo() {
            console.log(
                `${ this.name } - Activity: ${ this.activity } - Status: ${ this.getStatus() } `
            );
        }
    }
];


// ==========================================
// 2. this
// ==========================================

console.log("----- NEURON INFO -----");

neurons.forEach(neuron => {
    neuron.showInfo();
});


// ==========================================
// 3. Closure
// ==========================================

const createNeuronCounter = (name) => {

    let count = 0;

    return () => {

        count++;

        console.log(
            `${ name } fired ${ count } times`
        );
    };
};



const alphaCounter =
    createNeuronCounter("Neuron Alpha");

const betaCounter =
    createNeuronCounter("Neuron Beta");

alphaCounter();
alphaCounter();
betaCounter();
alphaCounter();


// ==========================================
// 4. Higher-Order Function + Callback
// ==========================================

const processNeurons = (neurons, callback) => {

    const result = [];

    for (let i = 0; i < neurons.length; i++) {

        result.push(
            callback(neurons[i])
        );
    }

    return result;
};

const names = processNeurons(
    neurons,
    neuron => neuron.name
);

console.log("Names:", names);


const activities = processNeurons(
    neurons,
    neuron => neuron.activity
);

console.log("Activities:", activities);


const statuses = processNeurons(
    neurons,
    neuron => neuron.getStatus()
);

console.log("Statuses:", statuses);


// ==========================================
// 5. Event Loop
// ==========================================

console.log("----- EVENT LOOP -----");

console.log("Neuron 1");


// Task Queue

setTimeout(() => {

    console.log("Neuron 2");

}, 0);


// Microtask Queue

Promise.resolve().then(() => {

    console.log("Neuron 3");

});


console.log("Neuron 4");


// ==========================================
// 6. Event Loop + Neuron
// ==========================================

console.log("Starting neuron analysis...");


setTimeout(() => {

    console.log(
        "Delayed analysis:",
        neurons[0].name
    );

}, 0);


Promise.resolve().then(() => {

    console.log(
        "Promise analysis:",
        neurons[1].name
    );

});


console.log("Analysis request sent.");
