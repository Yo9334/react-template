import Todo from "./Todo";

export default function TodoList({
  todos,
  todosDone,
  handleToggleCompleted,
  handleDelTodo,
}) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggleCompleted={handleToggleCompleted}
            handleDelTodo={handleDelTodo}
          />
        );
      })}
      {todosDone.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggleCompleted={handleToggleCompleted}
            handleDelTodo={handleDelTodo}
          />
        );
      })}
    </>
  );
}
