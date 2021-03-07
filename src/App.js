import './App.css';
import React, { useState } from "react";
import Input from "./page/input";
import ToDos from "./page/todolist";

function App() {
  const [inputValue, changeValue] = useState("");
  const [ToDoList, addToDo] = useState([]);
  const [filter, changeFilter] = useState("all");
  const [error, addError] = useState("");

  return (
      <div className="App">
        <Input error={error} addError={addError} changeFilter={changeFilter} inputValue={inputValue} ToDoList={ToDoList} addToDo={addToDo} changeValue={changeValue} />
        <ToDos filter={filter} ToDoList={ToDoList} addToDo={addToDo} />
      </div>
  );
}

export default App;
