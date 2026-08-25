const createNeuron = data => {
    return {
        name: data.specimen__name,
        species: data.donor__species,
        brainRegion: data.structure__name,
        layer: data.structure__layer,
        restingPotential: data.ef__vrest,
        firingRate: data.ef__avg_firing_rate,
        tau: data.ef__tau
    };
};
export {
    createNeuron
};