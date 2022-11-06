import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, handleToggleCompleted, handleDelTodo }) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        name="Completed"
        checked={todo.completed}
        onChange={() => {
          handleToggleCompleted(todo.id);
        }}
      />

      <span style={todo.completed ? { textDecoration: "line-through" } : {}}>
        {todo.name}
      </span>

      <FontAwesomeIcon
        icon="trash"
        className="logo"
        onClick={() => {
          handleDelTodo(todo.id);
        }}
      />
    </div>
  );
};

export default Todo;
