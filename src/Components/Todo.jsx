import React, { useState } from 'react';
import Task from './Task';
//import Formlist from './Formlist';


function TodoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [newDate, setNewDate] = useState("");
    const [dates, setDates] = useState([]);
    const [newStatus, setNewStatus] = useState("");
    const [statuss, setStatuss] = useState([]);
    var cardtarefa = {}

    function AddTask(task, date, sstatus, index) {
        let allTasks = tasks;
        allTasks.push(task);
        setTasks(allTasks);
        let allDates = dates;
        allDates.push(date);
        setDates(allDates);
        let allStatuss = statuss;
        allStatuss.push(sstatus);
        setStatuss(allStatuss);
        cardtarefa = {
            tarefa: task,
            data: date,
            status: sstatus
        }
        console.log(cardtarefa)
        console.log(allTasks);
        console.log(allDates);
        console.log(allStatuss);
        ClearInput();
    }

    function ClearInput(){
        setNewTask("")
        setNewDate("")
        setNewStatus("")
    }

    function RemoveTask(index) {
        let removeTask = tasks.filter((t,i) => i != index)
        setTasks(removeTask)
        let removeDate = dates.filter((t,i) => i != index)
        setDates(removeDate)
        let removeStatuss = statuss.filter((t,i) => i != index)
        setStatuss(removeStatuss)

    }

    function EditTask(index) {
        setNewTask(tasks[index])
        setNewDate(dates[index])
        setNewStatus(statuss[index])
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
                        value={newDate}
                        type="date"
                        onInput={(event)=> setNewDate(event.target.value)}/>
                    <br/>                
                </div>
                <div className='input-each'>
                    <label htmlFor="status">Status</label>
                    <input 
                        name='status'
                        value={newStatus}
                        onInput={(event)=> setNewStatus(event.target.value)}/>
                    <br/> 
                </div>                   
            </section>
            <button type="submit" onClick={() => AddTask(newTask, newDate, newStatus)}>Inserir Tarefa</button>
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