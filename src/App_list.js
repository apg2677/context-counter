import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, value]);
    setValue("");
  };
  const handleDelete = (i) => {
    console.log(i);
    const tempList = list.filter((item) => {
      return item != i;
    });
    setList(tempList);
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={submitHandler}>Add</button>
      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item, i) => {
            return (
              <li onClick={() => handleDelete(item)} key={i}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
