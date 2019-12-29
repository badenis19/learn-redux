import React from 'react';
// useSelector used to access states (E.g. counter) from any component
// useDispatch used to dispatch an action (used on the onClick)
import { increment, decrement } from "./actions/index.js";
import { useSelector, useDispatch } from "react-redux"; 

// FLOW: DISPATCHER triggers ACTION, ACTION caught by REDUCER, STATE changes according to reducer method

function App() {
  // extract the counter from state using the useSelector (all the data inside of the state are accessible that way) 
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // storing the imported useDispatch to be able to use it
  const dispatch = useDispatch();

  // using the dispatch with an argument
  // using a ternary to display something according to the condition
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={ () => dispatch(increment(5)) }>+</button>
      <button onClick={ () => dispatch(decrement(3)) }>-</button>
      { isLogged ? <h3>Secret info</h3> : <h3>You are not logged in</h3> }
    </div>
  );
}

export default App;
