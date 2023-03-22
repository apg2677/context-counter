import { useReducer } from "react";

const initialState = { title: "freeCodeCamp", count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "change-title":
      return { ...state, title: "FCC" };
    case "increment-counter":
      return { ...state, count: state.count + 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>{state.title} Code Sandbox</h1>
        <button onClick={() => dispatch({ type: "change-title" })}>
          Change Title
        </button>
        <button onClick={() => dispatch({ type: "increment-counter" })}>
          Increment Counter
        </button>
      </div>
      <p>{state.count}</p>
    </>
  );
};

export default App;
