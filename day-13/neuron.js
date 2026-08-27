class NeuronRecorder {
    constructor() {
        this.records = [];
    }

    record(neuron) {
        this.records.push({
            name: neuron.name,
            firingRate: neuron.firingRate
        });
    }

    getRecords() {
        return this.records;
    }
}

class Neuron {
    #firingRate;

    static firingRateThreshold = 3;

    constructor(
        name,
        species,
        brainRegion,
        layer,
        restingPotential,
        firingRate,
        tau
    ) {
        this.name = name;
        this.species = species;
        this.brainRegion = brainRegion;
        this.layer = layer;
        this.restingPotential = restingPotential;
        this.#firingRate = firingRate;
        this.tau = tau;
        this.recorder = new NeuronRecorder();
    }

    get firingRate() {
        return this.#firingRate;
    }

    isFiring() {
        return this.#firingRate >= Neuron.firingRateThreshold;
    }

    getInfo() {
        return `${this.name} (${this.species}) - ${this.brainRegion}, layer ${this.layer}`;
    }

    static isNeuron(value) {
        return value instanceof Neuron;
    }
}


const neuron = new Neuron(
    "Neuron A",
    "Homo Sapiens",
    "MTG",
    "3",
    -70,
    3.5,
    24
);

console.log(Neuron.firingRateThreshold);
console.log(Neuron.isNeuron(neuron));
console.log(Neuron.isNeuron({ name: "Fake Neuron" }));
console.log(neuron.isFiring());