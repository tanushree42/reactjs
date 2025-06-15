import React from "react";
import TodoList from "./components/TodoList";
import "./Todo.css";

function App() {
  return (
    <div className="app-container">
      <h1>React To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;