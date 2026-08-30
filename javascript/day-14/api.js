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
export {
    getNeurons
};