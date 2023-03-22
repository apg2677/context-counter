import React, { useState, useContext } from "react";
const CountContext = React.createContext();

const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, countHandler }}>
      <Child />
      <h2>{count}</h2>
    </CountContext.Provider>
  );
};

const Child = () => {
  const context = useContext(CountContext);
  const { countHandler } = context;

  return (
    <div>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default App;
