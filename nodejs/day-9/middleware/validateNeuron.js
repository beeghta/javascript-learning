const validateNeuron = (request, response, next) => {

    const { name, activity } = request.body;

    if (!name || typeof name !== "string") {
        response.status(400).json({
            error: "Name is required and must be a string"
        });
        return;
    }

    if (
        typeof activity !== "number" ||
        activity < 0 ||
        activity > 1
    ) {
        response.status(400).json({
            error: "Activity must be a number between 0 and 1"
        });
        return;
    }

    next();
};

export default validateNeuron;