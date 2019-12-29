// Here are the action that we can then export

// use payload to specify the number to increment by
export const increment = (nb) => {
    return {
        type: "INCREMENT",
        payload: nb
    };
};

export const decrement = (nb) => {
    return {
        type: "DECREMENT",
        payload: nb
    };
};