import React, { useState } from 'react';
import Task from './Task'
//import Formlist from './Formlist';


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
            <label htmlFor="input-group" className='labelforboard'>Cadastrar uma tarefa</label>
            <section className='input-group'>
                <div className='input-each'>
                    <label htmlFor="tarefa">Sua Tarefa</label>
                    <input 
                        name="tarefa"
                        value={newTask} 
                        onInput={(event)=> setNewTask(event.target.value)}/>
                    <br/>
                </div>
                <div className='input-each'>
                    <label htmlFor="data">Prazo</label>
                    <input 
                        name='data'
                        value="data"
                        type="date" />
                    <br/>                
                </div>
                <div className='input-each'>
                    <label htmlFor="status">Status</label>
                    <input 
                        name='status'
                        value="status" 
                        type="text" />
                    <br/> 
                </div>                   
            </section>
            <button type="submit" onClick={() => AddTask(newTask)}>Inserir Tarefa</button>
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