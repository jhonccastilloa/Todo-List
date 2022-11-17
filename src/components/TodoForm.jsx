import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};
const TodoForm = ({ addTodo, todoEdit, editTodo, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = ({ target }) => {
    const newFormValue = {
      ...formValues,
      [target.name]: target.value,
    };
    setFormValues(newFormValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Agregue un titulo");
      return;
    }
    if (description.trim() === "") {
      alert("Agregue una descripción");
      return;
    }
    if (formValues.id) {
      editTodo(formValues);
      alert("Editado correctamente");
    } else {
      addTodo(formValues);
      alert("agregado correctamente");
    }

    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h1>{todoEdit ? "Editar Tarea" : "Agregar Tarea"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          name="title"
          className="form-control"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripción"
          cols="30"
          rows="3"
          name="description"
          className="form-control mt-2"
          value={description}
          onChange={handleInputChange}
        ></textarea>
        {todoEdit && (
          <button className="btn btn-warning btn-block mt-2" onClick={() => setTodoEdit(null)}>Cancelar Edicion</button>
        )}
        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "Editar Tarea" : "Agregar Tarea"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
