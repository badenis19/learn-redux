// Defining the counterReducer, it's cases and giving a default case in case if nothing happens (Important for app not to crash)

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            // action.payload refers to the payload key in the function increment which holds a number in the actions/index.js
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;