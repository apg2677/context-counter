import React, { useRef } from "react";

const App = () => {
  return (
    <div>
      <TextInputWithFocusButton />
    </div>
  );
};

export default App;

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};
