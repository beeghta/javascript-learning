import { useEffect, useState } from "react";
import NeuronCard from "./NeuronCard.jsx";

function App() {
    const [neurons, setNeurons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newName, setNewName] = useState("");
    const [newActivity, setNewActivity] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadNeurons = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/v1/neurons"
                );

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data = await response.json();

                setNeurons(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadNeurons();
    }, []);

    const handleAddNeuron = async (event) => {
        event.preventDefault();

        try {
            if (!newName.trim()) {
                setError("Neuron name is required");
                return;
            }

            const activity = Number(newActivity);

            if (newActivity === "" || activity < 0 || activity > 1) {
                setError("Activity must be between 0 and 1");
                return;
            }

            setIsSubmitting(true);
            setError(null);

            const response = await fetch(
                "http://localhost:3000/api/v1/neurons",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: newName,
                        activity
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            setNeurons([...neurons, data]);

            setNewName("");
            setNewActivity("");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const [updatingNeuronId, setUpdatingNeuronId] = useState(null);

    const handleUpdateNeuron = async (id, newActivity) => {
        try {
            setUpdatingNeuronId(id);
            setError(null);

            const neuron = neurons.find(
                (neuron) => neuron.id === id
            );

            const response = await fetch(
                `http://localhost:3000/api/v1/neurons/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: neuron.name,
                        activity: newActivity
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const updatedNeuron = await response.json();

            setNeurons(
                neurons.map((neuron) =>
                    neuron.id === id
                        ? updatedNeuron
                        : neuron
                )
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setUpdatingNeuronId(null);
        }
    };

    const [deletingNeuronId, setDeletingNeuronId] = useState(null);
    const handleDeleteNeuron = async (id) => {
        try {
            setDeletingNeuronId(id);
            setError(null);

            const response = await fetch(
                `http://localhost:3000/api/v1/neurons/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            setNeurons(
                neurons.filter((neuron) => neuron.id !== id)
            );
        } catch (error) {
            setError(error.message);
        }
        finally {
            setDeletingNeuronId(null);
        }
    };

    if (loading) {
        return <h2>Loading neurons...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <>
            <h1>Neuron Dashboard</h1>

            <form onSubmit={handleAddNeuron}>
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
                    placeholder="Activity"
                    value={newActivity}
                    onChange={(event) =>
                        setNewActivity(event.target.value)
                    }
                />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add Neuron"}
                </button>
            </form>

            {neurons.map((neuron) => (
                <NeuronCard
                    key={neuron.id}
                    id={neuron.id}
                    name={neuron.name}
                    activity={neuron.activity}
                    onChangeActivity={handleUpdateNeuron}
                    onDeleteNeuron={handleDeleteNeuron}
                    isUpdating={updatingNeuronId === neuron.id}
                    isDeleting={deletingNeuronId === neuron.id}
                />
            ))}
        </>
    );
}

export default App;