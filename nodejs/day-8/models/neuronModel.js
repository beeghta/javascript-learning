import fs from "fs/promises";
import path from "path";

const filePath = path.join(
    process.cwd(),
    "models",
    "neurons.json"
);

const readNeurons = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

const writeNeurons = async (neurons) => {
    await fs.writeFile(
        filePath,
        JSON.stringify(neurons, null, 2)
    );
};

export { readNeurons, writeNeurons };