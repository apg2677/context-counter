import React, { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("New Val: ", value);
  }, [value]);
  return (
    <div>
      <input
        type="text"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default App;
