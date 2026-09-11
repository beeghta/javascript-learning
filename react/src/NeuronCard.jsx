import { useState } from "react";

function NeuronCard({
    id,
    name,
    activity,
    onChangeActivity,
    onDeleteNeuron,
    isUpdating,
    isDeleting
}) {
    const [newActivity, setNewActivity] = useState("");

    const statusClass = activity >= 0.8
        ? "firing"
        : "inactive";

    const handleResetActivity = () => {
        onChangeActivity(id, 0);
    };

    const handleUpdateActivity = () => {
        onChangeActivity(
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
                Status: {activity >= 0.8
                    ? " Firing"
                    : " Inactive"}
            </span>

            <input
                type="number"
                step="0.01"
                placeholder="New activity"
                value={newActivity}
                onChange={(event) =>
                    setNewActivity(event.target.value)
                }
            />

            <button
                onClick={handleUpdateActivity}
                disabled={isUpdating}
            >
                {isUpdating ? "Updating..." : "Update Activity"}
            </button>

            <button onClick={handleResetActivity}>
                Reset Activity
            </button>

            <button
                onClick={() => onDeleteNeuron(id)}
                disabled={isDeleting}
            >
                {isDeleting ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
}

export default NeuronCard;