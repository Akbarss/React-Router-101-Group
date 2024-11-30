import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TodoApp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [todos, setTodos] = useState([]); // Task list state
  const [editingId, setEditingId] = useState(null); // ID of the task being edited
  const [editingValue, setEditingValue] = useState(""); // Current editing value

  // Add a new task
  const onSubmit = (data) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...data }]);
    reset();
  };

  // Delete a task
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Start editing a task
  const handleEdit = (id, currentValue) => {
    setEditingId(id);
    setEditingValue(currentValue);
  };

  // Save the edited task
  const handleSave = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, task: editingValue } : todo)));
    setEditingId(null);
    setEditingValue("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      <h1>ToDo App</h1>

      {/* Add Task Form */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Введите задачу"
            {...register("task", { required: "Задача обязательна" })}
            style={{ width: "100%", padding: "10px" }}
          />
          {errors.task && <p style={{ color: "red" }}>{errors.task.message}</p>}
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Добавить
        </button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  style={{ flex: 1, marginRight: "10px", padding: "5px" }}
                />
                <button
                  onClick={() => handleSave(todo.id)}
                  style={{
                    background: "green",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Сохранить
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  style={{
                    background: "grey",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Отмена
                </button>
              </>
            ) : (
              <>
                <span>{todo.task}</span>
                <div>
                  <button
                    onClick={() => handleEdit(todo.id, todo.task)}
                    style={{
                      background: "blue",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    style={{
                      background: "red",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
