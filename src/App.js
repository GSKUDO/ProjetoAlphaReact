import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header"
import Addtask from "./Components/Addtask"
import Todolist from "./Components/Todo";


function App() {
  return (
    <Header />,
    <Addtask />,
    <Todolist />
  ) 
}

export default App;