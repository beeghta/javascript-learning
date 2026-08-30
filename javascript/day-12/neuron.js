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
        return this.#firingRate >= 3;
    }

    getInfo() {
        return `${this.name} (${this.species}) - ${this.brainRegion}, layer ${this.layer}`;
    }
}

class ExcitatoryNeuron extends Neuron {
    getType() {
        return "Excitatory";
    }
    getInfo() {
        return `Excitatory  ${super.getInfo()}`;
    }
}

class InhibitoryNeuron extends Neuron {
    getType() {
        return "Inhibitory";
    }
    getInfo() {
        return `Inhibitory  ${super.getInfo()}`;
    }
}

const excitatory = new ExcitatoryNeuron(
    "Neuron A",
    "Homo Sapiens",
    "MTG",
    "3",
    -70,
    3.5,
    24
);

const inhibitory = new InhibitoryNeuron(
    "Neuron B",
    "Homo Sapiens",
    "MTG",
    "3",
    -60,
    5,
    20
);

console.log(inhibitory.isFiring());

const neurons = [excitatory, inhibitory];

neurons.forEach(neuron => {
    console.log(neuron.getInfo());
});

const printNeuronTypes = neurons => {
    neurons.forEach(neuron => {
        console.log(`${neuron.name}: ${neuron.getType()}`);
    });
};

printNeuronTypes(neurons);

const neuron = new Neuron(
    "Neuron C",
    "Homo Sapiens",
    "MTG",
    "3",
    -70,
    3.5,
    24
);

neuron.recorder.record(neuron);
console.log(neuron.recorder.getRecords());