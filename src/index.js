import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


// STEP 1 - STORE -> Globalized STATE (Holds all the data/state for our application)


// STEP 2 - ACTION - Just describes what you want to do (E.g. I want to increment) and not actually incrementing
// It is a function that RETURNS an object

// Example of an action
const increment = () => {
    // type or name 
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    // type or name 
    return {
        type: "DECREMENT"
    }
}

// STEP 3 - REDUCER - Describes how your actions transform the state into the next state. 
// Going to check the ACTION, and based on ACTION will modify STORE 

// parameter define the initial state of our counter
const counter = (state = 0, action) => {
    // switch allows to switch the ACTION depending on its name/type
    switch(action.type){
        // at beginning will take a look at the initial state 0 (in parameter), increment it and update the STORE 
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

// now we can add it to the store
let store = createStore(counter);

// Display it on the console
store.subscribe(() => console.log(store.getState()));

// STEP 4 - DISPATCH - Execute the action
store.dispatch(increment());



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
