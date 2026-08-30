const fetchNeuronData = async () => {
    return fetch(
        "https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options[num_rows$eq5]"
    );
};

const fetchNeuronDataAgain = async () => {
    return fetch(
        "https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options[num_rows$eq3]"
    );
};

const fetchInvalidData = async () => {
    throw new Error("Neuron API unavailable");
};

const analyzeRequestResults = results => {
    const successful = results.filter(
        result => result.status === "fulfilled"
    );
    const failed = results.filter(
        result => result.status === "rejected"
    );
    const errors = failed.map(result => result.reason.message);

    return {
        successCount: successful.length,
        failureCount: failed.length,
        errors
    };
};

const main = async () => {
    const results = await Promise.allSettled([
        fetchNeuronData(),
        fetchNeuronDataAgain(),
        fetchInvalidData()
    ]);

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Request succeeded");
        } else {
            console.log("Request failed:", result.reason.message);
        }
    });

    const summary = analyzeRequestResults(results);
    console.log(summary);
};

main();