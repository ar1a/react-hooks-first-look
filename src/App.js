import React, { useReducer } from 'react';
import './App.css';

const Counter = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'INC':
          return { count: state.count + 1 };
        case 'DEC':
          return { count: state.count - 1 };
        case 'RESET':
          return { count: 0 };
        default:
          return state;
      }
    },
    {
      count: 0
    }
  );

  return (
    <div>
      <p>Current count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>{' '}
      <button onClick={() => dispatch({ type: 'RESET' })}>0</button>{' '}
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;
