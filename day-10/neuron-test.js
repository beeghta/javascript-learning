import test from "node:test";
import assert from "node:assert";
import { Neuron, ExcitatoryNeuron } from "./neuron.js";

test("isNeuron should identify Neuron instances", () => {

    const neuron = new Neuron(
        "Neuron A",
        "Homo Sapiens",
        "MTG",
        "3",
        -70,
        3.5,
        24
    );

    assert.strictEqual(
        Neuron.isNeuron(neuron),
        true
    );

    assert.strictEqual(
        Neuron.isNeuron({ name: "Fake Neuron" }),
        false
    );
});

test("isNeuron should identify inherited neuron instances", () => {

    const neuron = new ExcitatoryNeuron(
        "Neuron B",
        "Homo Sapiens",
        "MTG",
        "3",
        -70,
        4,
        24
    );

    assert.strictEqual(
        Neuron.isNeuron(neuron),
        true
    );
});
