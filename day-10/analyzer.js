import test from "node:test";
import assert from "node:assert";
import { analyzeNeurons } from "./analyzer.js";

test("analyze neurons should generate correct report", () => {

    const neurons = [
        {
            name: "Neuron A",
            firingRate: 2,
            restingPotential: -70
        },
        {
            name: "Neuron B",
            firingRate: 5,
            restingPotential: -60
        },
        {
            name: "Neuron C",
            firingRate: 8,
            restingPotential: -65
        }
    ];

    const report = analyzeNeurons(neurons);

    assert.strictEqual(report.numberOfNeurons, 3);
    assert.strictEqual(report.numberOfFiringNeurons, 2);
    assert.strictEqual(report.averageFiringRate, 5);
    assert.strictEqual(report.highestFiringNeuron.name, "Neuron C");
    assert.strictEqual(report.lowestFiringNeuron.name, "Neuron A");
});