const getNeuron = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve(randomNumber);
            } else {
                reject(new Error("Random number too low: " + randomNumber));
            }
        }, 1000);
    });
};

const showNeuron = async () => {
    try {
        const neuron = await getNeuron();
        console.log(neuron);
    } catch (error) {
        console.error("Failed to get neuron:", error.message);
    }
};

showNeuron();