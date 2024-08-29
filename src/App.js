import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onAddTodo = () => {
    setTodos((prevstate) => [...prevstate, value]);

    setValue("");
  };

  return (
    <div className="bg">
      <h1 className="heading">ToDO</h1>
      <div>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onAddTodo}>Add</button>
      </div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {todos.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
