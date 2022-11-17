import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2>TodoList</h2>
      {!todos.length ? (
        <h3>Agregue nuevas Tareas</h3>
      ) : (
        todos.map((el) => (
          <Todo
            todo={el}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            key={el.id}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
