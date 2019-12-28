import React from 'react';
// useSelector used to access states (E.g. counter) from any component
// useDispatch used to dispatch an action (used on the onClick)
import { increment } from "./actions/index.js";
import { useSelector, useDispatch } from "react-redux"; 


function App() {
  // extract the counter from state using the useSelector (all the data inside of the state are accessible that way) 
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      { isLogged ? <h3>Secret info</h3> : <h3>You are not logged in</h3> }
    
    </div>
  );
}

export default App;
