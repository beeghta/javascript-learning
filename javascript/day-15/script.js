
let neurons = [];

const API_URL = "http://localhost:3001/neurons";

const neuronsContainer = document.querySelector("#neurons");
const form = document.querySelector("#neuronForm");
const nameInput = document.querySelector("#neuronName");
const activityInput = document.querySelector("#activityInput");
const submitButton = form.querySelector("button[type='submit']");

let editingNeuronId = null;


// =========================
// RENDER
// =========================

const renderNeurons = () => {

    neuronsContainer.innerHTML = "";

    neurons.forEach(neuron => {

        const neuronElement = document.createElement("p");

        neuronElement.textContent =
            `${ neuron.name } - Activity: ${ neuron.activity } `;


        // EDIT BUTTON
        const editButton = document.createElement("button");

        editButton.type = "button";
        editButton.textContent = "Edit";

        editButton.dataset.id = neuron.id;
        editButton.dataset.action = "edit";


        // DELETE BUTTON
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.dataset.id = neuron.id;
        deleteButton.dataset.action = "delete";


        neuronElement.append(
            editButton,
            deleteButton
        );

        neuronsContainer.append(neuronElement);
    });
};


// =========================
// GET
// =========================

const getNeurons = async () => {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error(
                `Failed to fetch neurons.Status: ${ response.status } `
            );
        }

        const data = await response.json();

        neurons = data;

        renderNeurons();

    } catch (error) {

        console.error(
            "Error getting neurons:",
            error.message
        );
    }
};


// =========================
// POST
// =========================

const createNeuron = async (name, activity) => {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                activity: activity
            })
        });


        if (!response.ok) {

            throw new Error(
                `Failed to create neuron.Status: ${ response.status } `
            );
        }


        const neuron = await response.json();

        console.log("Created neuron:", neuron);

    } catch (error) {

        console.error(
            "Error creating neuron:",
            error.message
        );
    }
};


// =========================
// PUT
// =========================

const updateNeuron = async (id, name, activity) => {

    try {
        console.log("Updating:", id, name, activity);
        const response = await fetch(
            `${ API_URL } /${id}`,
{
    method: "PUT",

        headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: name,
        activity: activity
    })
}
        );


if (!response.ok) {

    throw new Error(
        `Failed to update neuron. Status: ${response.status}`
    );
}


const neuron = await response.json();

console.log("Updated neuron:", neuron);

    } catch (error) {

    console.error(
        "Error updating neuron:",
        error.message
    );
}
};


// =========================
// DELETE
// =========================

const deleteNeuron = async (id) => {

    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {

            throw new Error(
                `Failed to delete neuron. Status: ${response.status}`
            );
        }


        console.log("Neuron deleted:", id);

    } catch (error) {

        console.error(
            "Error deleting neuron:",
            error.message
        );
    }
};


// =========================
// EVENT DELEGATION
// =========================

neuronsContainer.addEventListener(
    "click",
    async (event) => {

        const button = event.target.closest("button");

        if (!button) {
            return;
        }


        const id = Number(button.dataset.id);

        const action = button.dataset.action;


        // DELETE
        if (action === "delete") {

            await deleteNeuron(id);

            await getNeurons();

            return;
        }


        // EDIT
        if (action === "edit") {

            const neuron = neurons.find(
                neuron => Number(neuron.id) === id
            );

            if (!neuron) {
                return;
            }


            nameInput.value = neuron.name;

            activityInput.value = neuron.activity;

            editingNeuronId = id;

            submitButton.textContent = "Update Neuron";
        }
    }
);


// =========================
// FORM SUBMIT
// =========================

form.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const name = nameInput.value.trim();

        const activity = Number(
            activityInput.value
        );


        // CREATE
        if (editingNeuronId === null) {

            await createNeuron(
                name,
                activity
            );
        }


        // UPDATE
        else {

            await updateNeuron(
                editingNeuronId,
                name,
                activity
            );

            editingNeuronId = null;

            submitButton.textContent = "Add Neuron";
        }


        form.reset();

        await getNeurons();
    }
);


// =========================
// INITIAL LOAD
// =========================

getNeurons();
