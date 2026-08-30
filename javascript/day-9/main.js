const getNeuron = async specimenId => {
    const response = await fetch(
        `https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::criteria,[specimen__id$eq${specimenId}]`
    );
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

const createNeuron = data => ({
    specimenId: data.specimen__id,
    name: data.specimen__name,
    species: data.donor__species,
    brainRegion: data.structure__name,
    layer: data.structure__layer,
    restingPotential: data.ef__vrest,
    firingRate: data.ef__avg_firing_rate,
    tau: data.ef__tau
});

const isFiring = neuron => neuron.firingRate >= 3;

const main = async () => {
    try {
        const specimenIds = [469803127, 320654829, 324257146];
        const results = await Promise.all(
            specimenIds.map(id => getNeuron(id))
        );

        const neurons = results
            .flatMap(responseData => responseData.msg)
            .map(createNeuron);
        //console.log(neurons);
        const firingNeurons = neurons.filter(isFiring);
        const firingNames = firingNeurons.map(neuron => neuron.name);

        console.log(firingNames);
    } catch (error) {
        console.log(error.message);
    }
};

main();