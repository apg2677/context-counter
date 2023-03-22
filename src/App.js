import { getSuggestedQuery } from "@testing-library/react";
import { useState } from "react";
const App = () => {
  const [storedValue, setStoredValue] = useLocalStorage(
    "select-value",
    "light"
  );
  return (
    <div>
      <h1>Local Storage Hook</h1>
      <select
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <p>
        Value from localStorage: <span>{storedValue}</span>
      </p>
    </div>
  );
};

export default App;

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return [storedValue, setValue];
};
