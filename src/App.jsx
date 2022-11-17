import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const InitialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo #3",
    description: "Desc del Todo #3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo #4",
    description: "Desc del Todo #4",
    completed: false,
  },
];
function App() {
  const [todos, setTodos] = useState(InitialTodos);
  const [todoEdit, setTodoEdit] = useState(null);
  
  const todoDelete = (id) => {
    const deleteConfirm = confirm("realmente quieres borrar este usuario");
    if (deleteConfirm) {
      const newTodos = todos.filter((el) => el.id !== id);
      setTodos(newTodos);
      setTodoEdit(null);
    }
  };
  const todoToogleCompleted = (id) => {
    const newTodos = todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    const newTodo = todos.map((el) => (el.id === todo.id ? todo : el));
    setTodos(newTodo);
  };

  const addTodo = (newTodo) => {
    const todoNew = {
      id: Date.now(),
      ...newTodo,
      completed: false,
    };
    setTodos([...todos, todoNew]);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <TodoList
              todos={todos}
              todoDelete={todoDelete}
              todoToogleCompleted={todoToogleCompleted}
              setTodoEdit={setTodoEdit}
            />
          </div>
          <div className="col-4">
            <TodoForm
              addTodo={addTodo}
              todoEdit={todoEdit}
              editTodo={editTodo}
              setTodoEdit={setTodoEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
