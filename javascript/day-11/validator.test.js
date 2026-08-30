import test from "node:test";
import assert from "node:assert";
import { isValidNeuron } from "./validator.js";

test("invalid neuron should return false", () => {

    const neuron = {
        name: "Neuron A",
        firingRate: "3.5",
        restingPotential: -70
    };

    assert.strictEqual(
        isValidNeuron(neuron),
        false
    );
});