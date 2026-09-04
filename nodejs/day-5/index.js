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
const firingNeuron = neurons.filter(neuron => neuron.activity >= 0.8).map(neuron => neuron.name);

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
    else if (url === "/" && method === "GET") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("Welcome to Neuron Server");
        return;
    }
    else if (url === "/firing" && method === "GET") {
        response.statusCode = 200;
        response.setHeader(
        "Content-Type",
        "application/json"
    );

        response.end(JSON.stringify(firingNeuron));
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