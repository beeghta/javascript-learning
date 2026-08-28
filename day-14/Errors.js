class InvalidNeuronError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidNeuronError";
    }
}

export { InvalidNeuronError };