import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosId = localStorage.getItem("todosId");
    if (todosId) {
      const stringifiedSavedToDO = localStorage.getItem(todosId);
      const savedTodos = JSON.parse(stringifiedSavedToDO);
      if (savedTodos) setTodos(savedTodos);
    }
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onAddTodo = () => {
    setTodos((prevstate) => [...prevstate, value]);

    setValue("");
  };

  const onClickDelete = (index) => {
    setTodos((prevstate) => prevstate.filter((_, i) => i !== index));
  };

  const onClickClear = () => {
    setTodos([]);
  };

  const onClickSave = () => {
    const stringifiedTodos = JSON.stringify(todos);
    const todosId = uuidv4();
    localStorage.setItem("todosId", todosId);
    localStorage.setItem(todosId, stringifiedTodos);
  };

  return (
    <div
      style={{
        backgroundColor: "green",
        backgroundSize: "cover",
        width: "100vw",
        minHeight: "100vh",
        maxHeight: "cover",
        padding: "10px",
      }}
    >
      <h1 style={{ color: "pink", fontSize: "48px", marginLeft: "200px" }}>
        ToDO's
      </h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={{
            height: "30px",
            width: "600px",
            border: "none",
            borderRadius: "10px",
            backgroundImage: "linear-gradient(to right, yellow, pink)",
            fontSize: "20px",
            color: "blue",
            marginBottom: "20px",
            padding: "10px",
          }}
        />
        <button
          style={{
            height: "48px",
            width: "150px",
            color: "pink",
            backgroundColor: "violet",
            borderRadius: "10px",
            marginLeft: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          onClick={onAddTodo}
        >
          Add
        </button>
      </div>
      <hr style={{ height: "1px", width: "90%", borderColor: "brown" }}></hr>
      <div>
        <ul style={{ listStyleType: "none", padding: "none" }}>
          {todos.map((item, index) => (
            <li
              key={index}
              style={{
                paddingBottom: "10px",
                color: "pink",
                fontSize: "30px",
                margin: "20px",
              }}
            >
              {item}
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
                style={{
                  marginLeft: "30px",
                  backgroundColor: "Yellow",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: "100px",
          }}
        >
          <button
            onClick={onClickClear}
            style={{
              height: "48px",
              width: "150px",
              color: "pink",
              backgroundColor: "violet",
              borderRadius: "10px",
              marginRight: "40px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            clear
          </button>
          <button
            style={{
              height: "48px",
              width: "150px",
              color: "pink",
              backgroundColor: "violet",
              borderRadius: "10px",
              marginRight: "40px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={onClickSave}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
