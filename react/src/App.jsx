import { useMemo, useState } from "react";
import { useNeuron } from "./NeuronContext.jsx";
import NeuronCard from "./NeuronCard.jsx";

function App() {
    const {
        neurons,
        loading,
        error,
        handleUpdateNeuron,
        updatingNeuronId,
        handleDeleteNeuron,
        deletingNeuronId,
        handleAddNeuron,
        isSubmitting
    } = useNeuron();

    const [newName, setNewName] = useState("");
    const [newActivity, setNewActivity] = useState("");

    const [minActivity, setMinActivity] = useState("");
    const [activityInput, setActivityInput] = useState("");

    const filteredNeurons = useMemo(() => {
        if (minActivity === "") {
            return neurons;
        }

        return neurons.filter(
            (neuron) =>
                neuron.activity >= Number(minActivity)
        );
    }, [neurons, minActivity]);

    const firingNeurons = useMemo(() => {
        return neurons.filter(
            (neuron) => neuron.activity >= 0.8
        );
    }, [neurons]);

    const averageActivity =
        neurons.length > 0
            ? neurons.reduce(
                (total, next) =>
                    total + next.activity,
                0
            ) / neurons.length
            : 0;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!newName.trim()) {
            return;
        }

        const activity = Number(newActivity);

        if (
            Number.isNaN(activity) ||
            activity < 0 ||
            activity > 1
        ) {
            return;
        }

        await handleAddNeuron(
            newName,
            activity
        );

        setNewName("");
        setNewActivity("");
    };

    const handleFilter = () => {
        setMinActivity(activityInput);
    };

    if (loading) {
        return <p>Loading neurons...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="app">
            <h1>Neuron Dashboard</h1>
            <dive className="topcard"> 
            <section className="filterbox">
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    placeholder="Minimum activity"
                    value={activityInput}
                    onChange={(event) =>
                        setActivityInput(
                            event.target.value
                        )
                    }
                />

                <button onClick={handleFilter}>
                    Filter
                </button>

                <button
                    onClick={() => {
                        setActivityInput("");
                        setMinActivity("");
                    }}
                >
                    Clear Filter
                </button>
            </section>
            <section className="addNeuron">
                

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Neuron name"
                        value={newName}
                        onChange={(event) =>
                            setNewName(event.target.value)
                        }
                    />

                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        placeholder="Activity"
                        value={newActivity}
                        onChange={(event) =>
                            setNewActivity(
                                event.target.value
                            )
                        }
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Adding..."
                            : "Add Neuron"}
                    </button>
                </form>
            </section>
            </dive>
            <section>
                {filteredNeurons.length === 0 ? (
                    <p>No neurons found.</p>
                ) : (
                    filteredNeurons.map((neuron) => (
                        <NeuronCard
                            key={neuron.id}
                            id={neuron.id}
                            name={neuron.name}
                            activity={neuron.activity}
                            onChangeActivity={
                                handleUpdateNeuron
                            }
                            onDeleteNeuron={
                                handleDeleteNeuron
                            }
                            isUpdating={
                                updatingNeuronId ===
                                neuron.id
                            }
                            isDeleting={
                                deletingNeuronId ===
                                neuron.id
                            }
                        />
                    ))
                )}
            </section>
          
            <section>
                <h2>Statistics</h2>

                <p>
                    Total neurons: {neurons.length}
                </p>

                <p>
                    Firing neurons:{" "}
                    {firingNeurons.length}
                </p>

                <p>
                    Average activity:{" "}
                    {averageActivity.toFixed(2)}
                </p>
            </section>
        </div>
    );
}

export default App;