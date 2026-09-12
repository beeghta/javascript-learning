import { useState } from "react";
import { useNeuron } from "./NeuronContext.jsx";

function NeuronCard({
    id,
    name,
    activity,
    isUpdating,
    isDeleting
}) {
    const [newActivity, setNewActivity] = useState("");

    const {
        handleUpdateNeuron,
        handleDeleteNeuron
    } = useNeuron();

    const statusClass =
        activity >= 0.8
            ? "firing"
            : "inactive";

    const handleResetActivity = () => {
        handleUpdateNeuron(id, 0);
    };

    const handleUpdateActivity = () => {
        handleUpdateNeuron(
            id,
            Number(newActivity)
        );

        setNewActivity("");
    };

    return (
        <div className={`neuron-card ${statusClass}`}>
            <span>{name}</span>

            <span>
                Activity: {activity}
            </span>

            <span>
                Status:{" "}
                {activity >= 0.8
                    ? "Firing"
                    : "Inactive"}
            </span>
            <div className="btncard">
            <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                placeholder="New activity"
                value={newActivity}
                onChange={(event) =>
                    setNewActivity(
                        event.target.value
                    )
                }
            />
            
            <button
                onClick={handleUpdateActivity}
                disabled={isUpdating}
            >
                {isUpdating
                    ? "Updating..."
                    : "Update Activity"}
            </button>

            <button
                onClick={handleResetActivity}
                disabled={isUpdating}
            >
                Reset Activity
            </button>

            <button
                onClick={() =>
                    handleDeleteNeuron(id)
                }
                disabled={isDeleting}
            >
                {isDeleting
                    ? "Deleting..."
                    : "Delete"}
                </button>
            </div>
        </div>
    );
}

export default NeuronCard;