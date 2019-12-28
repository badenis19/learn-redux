// Defining the counterReducer, it's cases and giving a default case in case if nothing happens (Important for app not to crash)

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}



export default counterReducer;