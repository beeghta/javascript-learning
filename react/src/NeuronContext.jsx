import { createContext, useContext } from "react";
import useNeurons from "./useNeurons.js";

const NeuronContext = createContext();

export function NeuronProvider({ children }) {
    const neuronData = useNeurons();

    return (
        <NeuronContext.Provider value={neuronData}>
            {children}
        </NeuronContext.Provider>
    );
}

export const useNeuron = () => {
    return useContext(NeuronContext);
};

export default NeuronContext;