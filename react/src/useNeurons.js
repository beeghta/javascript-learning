import {
    useEffect,
    useReducer,
    useState
} from "react";


const initialState = {
    neurons: [],
    loading: true,
    error: null,
    updatingNeuronId: null,
    deletingNeuronId: null,
    isSubmitting: false
};


function neuronReducer(state, action) {
    switch (action.type) {
        case "LOAD_SUCCESS":
            return {
                ...state,
                neurons: action.payload,
                loading: false
            };

        case "LOAD_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case "UPDATE_SUCCESS":
            return {
                ...state,
                neurons: state.neurons.map(
                    (neuron) =>
                        neuron.id === action.payload.id
                            ? action.payload
                            : neuron
                ),
                updatingNeuronId: null
            };
        case "DELETE_START":
            return {
                ...state,
                deletingNeuronId: action.payload
            };
        case "DELETE_SUCCESS":
            return {
                ...state,
                neurons: state.neurons.filter(
                    (neuron) => neuron.id !== action.payload
                ),
                deletingNeuronId: null
            };
        case "ADD_SUCCESS":
            return {
                ...state,
                neurons: [
                    ...state.neurons,
                    action.payload
                ]
            };
        case "UPDATE_START":
            return {
                ...state,
                updatingNeuronId: action.payload
            };
        case "ADD_START":
            return {
                ...state,
                isSubmitting: true
            };

        case "ADD_SUCCESS":
            return {
                ...state,
                neurons: [
                    ...state.neurons,
                    action.payload
                ],
                isSubmitting: false
            };
        case "ADD_ERROR":
            return {
                ...state,
                error: action.payload,
                isSubmitting: false
            };
        default:
            return state;
    }
}


function useNeurons() {

    const [state, dispatch] = useReducer(
        neuronReducer,
        initialState
    );

    const {
        neurons,
        loading,
        error,
        updatingNeuronId,
        deletingNeuronId,
        isSubmitting
    } = state;



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

                const data =
                    await response.json();

                dispatch({
                    type: "LOAD_SUCCESS",
                    payload: data.data
                });

            } catch (error) {

                dispatch({
                    type: "LOAD_ERROR",
                    payload: error.message
                });
            }
        };

        loadNeurons();

    }, []);


    const handleUpdateNeuron = async (
        id,
        activity
    ) => {

        dispatch({
            type: "UPDATE_START",
            payload: id
        });

        try {

            const neuron = neurons.find(
                (neuron) => neuron.id === id
            );

            const response = await fetch(
                `http://localhost:3000/api/v1/neurons/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json"
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

            const data =
                await response.json();

            dispatch({
                type: "UPDATE_SUCCESS",
                payload: data
            });

        } catch (error) {

            dispatch({
                type: "LOAD_ERROR",
                payload: error.message
            });

        } 
    };


    const handleDeleteNeuron = async (id) => {

        dispatch({
                type: "DELETE_START",
                payload: id
            });

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

            dispatch({
                type: "DELETE_SUCCESS",
                payload: id
            });

        } catch (error) {

            dispatch({
                type: "LOAD_ERROR",
                payload: error.message
            });

        } 
    };


    const handleAddNeuron = async (
        name,
        activity
    ) => {

        dispatch({
            type: "ADD_START"
        });

        try {

            const response = await fetch(
                "http://localhost:3000/api/v1/neurons",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
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

            const data =
                await response.json();

            dispatch({
                type: "ADD_SUCCESS",
                payload: data
            });
        } catch (error) {
             dispatch({
                type: "LOAD_ERROR",
                payload: error.message
            });
        } 
    };


    return {
        neurons,
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