import counterReducer  from "./counter";
import loggedReducer from "./isLogged";
import { combinedReducers } from "redux";

// will contain all of our needed reducers
const allReducer = combinedReducers({
    counter: counterReducer, // or only put counterReducer (shorthand)
    IsLogged: loggedReducer
})

export default allReducers;