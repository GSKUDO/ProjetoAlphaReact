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
    const [red, setRed] = useState([]);
    const [yellow, setYellow] = useState([]);
    const [green, setGreen] = useState([]);

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
        let cardtarefa = {
            tarefa: task,
            data: date,
            status: sstatus
        }
        console.log(sstatus)
        if (cardtarefa.status === "afazer"){
            let allRed = red;
            allRed.push(cardtarefa);
            setRed(allRed);
            console.log(red)
        }else if (cardtarefa.status === "fazendo"){
            let allYellow = yellow;
            allYellow.push(cardtarefa);
            setYellow(allYellow);
            console.log(yellow)
        }else if (cardtarefa.status === "finalizado"){
            let allGreen = green;
            allGreen.push(cardtarefa);
            setGreen(allGreen);
            console.log(green)
        }

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
                    <label htmlFor="statusSelect">Status</label>
                        <select name="statusSelect" value={newStatus} onChange={(event)=> setNewStatus(event.target.value)}>
                            <option value="">Escolha uma opção: </option>
                            <option value="afazer">A fazer</option>
                            <option value="fazendo">Fazendo</option>
                            <option value="finalizado">Finalizado</option>
                        </select>
                </div>                   
            </section>
            <button type="submit" onClick={() => AddTask(newTask, newDate, newStatus)}>Inserir Tarefa</button>
            <label htmlFor="board" className='labelforboard'>Quadro de Tarefas</label>
            <div className='board'>
                <section className="task-list-red">
                    <h2 className='afazer'>A fazer </h2>
                    {
                        red.map((task, index) => (
                            <Task task={task.tarefa} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>

                <section className="task-list-yellow">
                    <h2 className='fazendo'>Fazendo </h2>
                    {   
                        yellow.map((task,index) => (
                            <Task task={task.tarefa} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }   
                </section>
                
                <section className="task-list-green">
                    <h2 className='finalizado'>Finalizado </h2>
                    {
                       green.map((task,index) => (
                            <Task task={task.tarefa} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </section>
            </div>
      </section>
  );
}

export default TodoList;