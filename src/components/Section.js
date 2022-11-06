import { useState } from "react";
import TodoList from "./TodoList";

export default function Section() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  const handleAddTodo = () => {
    if (name === "") return;
    const newTab = [...todos];
    newTab.push({
      id: new Date().getTime(),
      name: name,
      completed: false,
      done: 0,
    });
    setTodos(newTab);
    setName("");
  };

  const handleToggleCompleted = (id) => {
    const newTab = [...todos];
    const todo = newTab.find((el) => el.id === id);
    todo.completed = !todo.completed;
    todo.done = new Date().getTime();
    setTodos(newTab);
  };

  const handleDelTodo = (id) => {
    const newTab = [...todos].filter((el) => el.id !== id);
    setTodos(newTab);
  };

  return (
    <div className="container">
      <div className="list-item">
        {/* task not completed */}
        <TodoList
          todos={[...todos].filter((el) => el.completed === false)}
          todosDone={[...todos]
            .filter((el) => el.completed === true)
            .sort((a, b) => a - b)}
          handleToggleCompleted={handleToggleCompleted}
          handleDelTodo={handleDelTodo}
        />
      </div>

      <div className="add-item">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="new task"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={handleAddTodo}>Add task</button>
      </div>
    </div>
  );
}
