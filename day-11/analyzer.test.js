import test from "node:test";
import assert from "node:assert";
import { analyzeNeurons } from "./analyzer.js";
import { Neuron } from "./neuron.js";


test("analyze neurons should generate correct report", () => {

    const neurons = [
        new Neuron(
            "Neuron A",
            "Homo Sapiens",
            "MTG",
            "3",
            -70,
            2,
            24
        ),

        new Neuron(
            "Neuron B",
            "Homo Sapiens",
            "MTG",
            "3",
            -60,
            5,
            24
        ),

        new Neuron(
            "Neuron C",
            "Homo Sapiens",
            "MTG",
            "3",
            -65,
            8,
            24
        )
    ];


    const report = analyzeNeurons(neurons);

    assert.strictEqual(report.numberOfNeurons, 3);
    assert.strictEqual(report.numberOfFiringNeurons, 2);
    assert.strictEqual(report.averageFiringRate, 5);
    assert.strictEqual(report.highestFiringNeuron.name, "Neuron C");
    assert.strictEqual(report.lowestFiringNeuron.name, "Neuron A");
});