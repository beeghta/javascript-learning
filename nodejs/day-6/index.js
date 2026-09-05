import http from "http";
const neurons = [
    {
        id: 1,
        name: "Neuron Alpha",
        activity: 0.95
    },
    {
        id: 2,
        name: "Neuron Beta",
        activity: 0.72
    },
    {
        id: 3,
        name: "Neuron Gamma",
        activity: 0.31
    }
];

const server = http.createServer((request, response) => {
    const { method, url } = request;
    console.log(method, url);

    if (url === "/neurons" && method === "GET") {
        response.statusCode = 200;
        response.setHeader(
            "Content-Type",
            "application/json"
        );
        response.end(JSON.stringify(neurons));
        return;
    }
    else if (url === "/neurons" && method === "POST") {
        let body = "";
        request.on("data", chunk => {body += chunk;});

        request.on("end", () => {

            const neuronData = JSON.parse(body);

            const newNeuron = {
                id: neurons.length + 1,
                name: neuronData.name,
                activity: neuronData.activity
            };

            neurons.push(newNeuron);

            response.statusCode = 201;
            response.setHeader("Content-Type", "application/json");

            response.end(JSON.stringify(newNeuron));
        });
        return;
    }
    if (method === "GET" && url.startsWith("/neurons/")) {

        const parts = url.split("/");
        const id = Number(parts[2]);

        const neuron = neurons.find(
            neuron => neuron.id === id
        );

        if (!neuron) {

            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");

            response.end(
                JSON.stringify({
                    error: "Neuron not found"
                })
            );

            return;
        }

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        response.end(JSON.stringify(neuron));

        return;
    }
    if (method === "PUT" && url.startsWith("/neurons/")) {

        const parts = url.split("/");
        const id = Number(parts[2]);

        const neuron = neurons.find(
            neuron => neuron.id === id
        );

        if (!neuron) {

            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");

            response.end(
                JSON.stringify({
                    error: "Neuron not found"
                })
            );

            return;
        }

        let body = "";

        request.on("data", chunk => {
            body += chunk;
        });

        request.on("end", () => {

            try {

                const neuronData = JSON.parse(body);

                neuron.name = neuronData.name;
                neuron.activity = neuronData.activity;

                response.statusCode = 200;
                response.setHeader("Content-Type", "application/json");

                response.end(JSON.stringify(neuron));

            } catch (error) {

                response.statusCode = 400;
                response.setHeader("Content-Type", "application/json");

                response.end(
                    JSON.stringify({
                        error: "Invalid JSON"
                    })
                );
            }
        });

        return;
    }
    if (method === "DELETE" && url.startsWith("/neurons/")) {

        const parts = url.split("/");
        const id = Number(parts[2]);

        const index = neurons.findIndex(
            neuron => neuron.id === id
        );

        if (index === -1) {

            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");

            response.end(
                JSON.stringify({
                    error: "Neuron not found"
                })
            );

            return;
        }

        const deletedNeuron = neurons.splice(index, 1);

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        response.end(
            JSON.stringify({
                message: "Neuron deleted",
                neuron: deletedNeuron[0]
            })
        );

        return;
    }
    response.statusCode = 404;

    response.setHeader(
        "Content-Type",
        "text/plain"
    );

    response.end("404 - Route not found");
});

server.listen(3000, () => {
    console.log("Neuron Server running on port 3000");
});
