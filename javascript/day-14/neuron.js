class Neuron {
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
        this.firingRate = firingRate;
        this.tau = tau;
    }

    isFiring() {
        return this.firingRate >= 3;
    }

    getInfo() {
        return `${this.name} (${this.species}) - ${this.brainRegion}, layer ${this.layer}`;
    }
}

const createNeuron = data => {
    return new Neuron(
        data.specimen__name,
        data.donor__species,
        data.structure__name,
        data.structure__layer,
        data.ef__vrest,
        data.ef__avg_firing_rate,
        data.ef__tau
    );
};

export {
    Neuron,
    createNeuron
};