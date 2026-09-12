import { useEffect, useState } from "react";

function useNeurons() {
    const [neurons, setNeurons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [updatingNeuronId, setUpdatingNeuronId] = useState(null);
    const [deletingNeuronId, setDeletingNeuronId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadNeurons = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/v1/neurons"
                );

                if (!response.ok) {
                    throw new Error(
                        `HTTP error: ${response.status}`
                    );
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

    const handleUpdateNeuron = async (id, activity) => {
        setUpdatingNeuronId(id);

        try {
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
                        activity
                    })
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP error: ${response.status}`
                );
            }

            const data = await response.json();

            setNeurons((currentNeurons) =>
                currentNeurons.map((neuron) =>
                    neuron.id === id
                        ? data
                        : neuron
                )
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setUpdatingNeuronId(null);
        }
    };

    const handleDeleteNeuron = async (id) => {
        setDeletingNeuronId(id);

        try {
            const response = await fetch(
                `http://localhost:3000/api/v1/neurons/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP error: ${response.status}`
                );
            }

            setNeurons((currentNeurons) =>
                currentNeurons.filter(
                    (neuron) => neuron.id !== id
                )
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setDeletingNeuronId(null);
        }
    };

    const handleAddNeuron = async (name, activity) => {
        setIsSubmitting(true);

        try {
            const response = await fetch(
                "http://localhost:3000/api/v1/neurons",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        activity
                    })
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP error: ${response.status}`
                );
            }

            const data = await response.json();

            setNeurons((currentNeurons) => [
                ...currentNeurons,
                data
            ]);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        neurons,
        setNeurons,
        loading,
        error,

        handleUpdateNeuron,
        updatingNeuronId,

        handleDeleteNeuron,
        deletingNeuronId,

        handleAddNeuron,
        isSubmitting
    };
}

export default useNeurons;