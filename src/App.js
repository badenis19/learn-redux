import React from 'react';
import { useSelector } from "react-redux"; // use to access states (E.g. counter) from any component

function App() {
  // extract the counter from state using the useSelector (all the data inside of the state are accessible that way) 
  const counter = useSelector(state => state.counter);

  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button>+</button>
      <button>-</button>

      { isLogged ? <h3>Secret info</h3> : <h3>You are not logged in</h3> }
    
    </div>
  );
}

export default App;
