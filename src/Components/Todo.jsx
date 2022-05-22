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
            <section className='input-group'>
                <input 
                    value={newTask} 
                    onInput={(event)=> setNewTask(event.target.value)}/>
                <br/>                
                <button type="submit" onClick={() => AddTask(newTask)}>Inserir Tarefa</button>
                <br/>
            </section>

            <label htmlFor="board" className='labelforboard'>Quadro de Tarefas</label>
            <div className='board'>
                <section className="task-list-red">
                    <h2 className='afazer'>A fazer </h2>
                    {
                        tasks.map((task,index) => (
                            <Task task={task} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>

                <section className="task-list-yellow">
                    <h2 className='fazendo'>Fazendo </h2>
                    {   
                        tasks.map((task,index) => (
                            <Task task={task} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }   
                </section>
                
                <section className="task-list-green">
                    <h2 className='finalizado'>Finalizado </h2>
                    {
                        tasks.map((task,index) => (
                            <Task task={task} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>
            </div>
      </section>
  );
}

export default TodoList;