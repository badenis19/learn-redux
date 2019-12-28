import counterReducer  from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// will contain all of our needed reducers
const allReducer = combineReducers({
    counter: counterReducer, // or only put counterReducer (shorthand)
    IsLogged: loggedReducer
})

export default allReducer;