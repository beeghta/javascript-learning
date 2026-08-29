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

const form = document.querySelector("#neuronForm");
const nameInput = document.querySelector("#neuronName");
const activityInput = document.querySelector("#activityInput");
const neuronsContainer = document.querySelector("#neurons");


const renderNeurons = () => {
    neuronsContainer.innerHTML = "";

    neurons.forEach(neuron => {
        const neuronElement = document.createElement("p");

        neuronElement.textContent =
            `${ neuron.name } - Activity: ${ neuron.activity } `;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = neuron.id;

        neuronElement.append(deleteButton);
        neuronsContainer.append(neuronElement);
    });
};


renderNeurons();


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const activity = Number(activityInput.value);

    const newNeuron = {
        id: Date.now(),
        name: name,
        activity: activity
    };

    neurons.push(newNeuron);

    form.reset();

    renderNeurons();
});


neuronsContainer.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {

        const id = Number(event.target.dataset.id);

        const index = neurons.findIndex(
            neuron => neuron.id === id
        );

        neurons.splice(index, 1);

        renderNeurons();
    }
});