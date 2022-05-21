import React, { useState } from 'react';
import Task from './Task'


function TodoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(["Aula React", "Projeto Estágio", "Reunião Nuri"]);

    function AddTask(task, index) {
        let allTasks = tasks;
        allTasks.push(task);

        setTasks(allTasks);
        ClearInput();
    }

    function ClearInput(){
        setNewTask("")
    }

    function RemoveTask(index) {
        let removeTask = tasks.filter((t,i) => i != index)
        setTasks(removeTask)
    }

    function EditTask(index) {
        setNewTask(tasks[index])
        RemoveTask(index);
    }

  return (
      <section className="container">
          <input 
            value={newTask} 
            onInput={
                (event)=> 
                    setNewTask(event.target.value)
            }/>
            <button type="submit" onClick={() => AddTask(newTask)}>Add</button>
            {<section className="task-list">
                {
                    tasks.map((task,index) => (
                        <Task task={task} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                    ))
                }
                
            </section>}
      </section>
  );
}

export default TodoList;