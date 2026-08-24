const getNeurons = async () => {
    const response = await fetch(
        `https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options[num_rows$eq10]`
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
};

const createNeuron = data => {
    return {
        name: data.specimen__name,
        species:  data.donor__species,
        brainRegion:  data.structure__name,
        layer: data.structure__layer,
        restingPotential: data.ef__vrest,
        firingRate: data.ef__avg_firing_rate,
        tau: data.ef__tau
    };
};
const isFiring = neuron => {
    return neuron.firingRate >= 3;
};
const main = async () => {
    try {
        const responseData = await getNeurons();
        const neurons = responseData.msg.map(createNeuron);
        const firingNeurons = neurons.filter(isFiring);

        const firingNames = firingNeurons.map(neuron => neuron.name);
        console.log(firingNames);

        const totalFiringRate = firingNeurons.reduce(
            (sum, neuron) => sum + neuron.firingRate,
            0
        );
        console.log(totalFiringRate);

        const averageFiringRate =
            firingNeurons.length > 0
                ? totalFiringRate / firingNeurons.length
                : 0;
        console.log(averageFiringRate);

       // console.log(firingNeurons);
        //console.log(Object.keys(data));
        //console.log(data.msg);
        //console.log(data);
        //const neuron = createNeuronFromUser(user);
       // console.log(`${neuron.name} firing?`, isFiring(neuron));

    } catch (error) {
        console.log(error.message);
    }
};

main();

