import React, { useState } from 'react';
import Task from '../task/Task';
//import Formlist from './Formlist';

import {Container} from './styles'
import {LabelBoard} from './styles'
import {InputGroup} from './styles'
import {InputEach} from './styles'
import {Button} from './styles'
import {Input} from './styles'
import {Select} from './styles'
import {Board} from './styles'
import {CardSection} from './styles'
import {Card} from './styles'
import {LabelInputGroup} from './styles'


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

        if (cardtarefa.status === "afazer"){
            let allRed = red;
            allRed.push(cardtarefa);
            setRed(allRed);

        }else if (cardtarefa.status === "fazendo"){
            let allYellow = yellow;
            allYellow.push(cardtarefa);
            setYellow(allYellow);

        }else if (cardtarefa.status === "finalizado"){
            let allGreen = green;
            allGreen.push(cardtarefa);
            setGreen(allGreen);

        }

        ClearInput();
    }

    function ClearInput(){
        setNewTask("")
        setNewDate("")
        setNewStatus("")
    }

    function RemoveTask(index, status) {
        if (status === "afazer"){
            let removeTask = red.filter((t,i) => i != index)
            setRed(removeTask)
        }else if (status === "fazendo"){
            let removeTask = yellow.filter((t,i) => i != index)
            setYellow(removeTask)
        } else if (status === "finalizado"){
            let removeTask = green.filter((t,i) => i != index)
            setGreen(removeTask)
        }
    }

    function EditTask(index, status, data, task) {
            setNewTask(task)
            setNewDate(data)
            setNewStatus(status)   
        RemoveTask(index, status);
    }

  return (
    <Container>            
        <LabelBoard htmlFor="input-group">Cadastrar uma tarefa</LabelBoard>
        <InputGroup name="input-group">
            <InputEach>
                <LabelInputGroup htmlFor="tarefa">Sua Tarefa</LabelInputGroup>
                <Input 
                    name="tarefa"
                    value={newTask} 
                    onInput={(event)=> setNewTask(event.target.value)}/>
                <br/>
            </InputEach>
            <InputEach>
                <LabelInputGroup htmlFor="data">Prazo</LabelInputGroup>
                <Input 
                    name='data'
                    value={newDate}
                    type="date"
                    onInput={(event)=> setNewDate(event.target.value)}/>
                <br/>                
            </InputEach>
            <InputEach>
                <LabelInputGroup htmlFor="statusSelect">Status</LabelInputGroup>
                    <Select name="statusSelect" value={newStatus} onChange={(event)=> setNewStatus(event.target.value)}>
                        <option value="">Escolha uma opção: </option>
                        <option value="afazer">A fazer</option>
                        <option value="fazendo">Fazendo</option>
                        <option value="finalizado">Finalizado</option>
                    </Select>
            </InputEach>                   
        </InputGroup>
        <Button type="submit" onClick={() => AddTask(newTask, newDate, newStatus)}>Inserir Tarefa</Button>


        <LabelBoard htmlFor="board">Quadro de Tarefas</LabelBoard>
            <Board name="board">
                <CardSection background="#FFD0D0" border="#D21B1B">
                    <Card inputColor="#D21B1B">A fazer </Card>
                    {
                        red.map((task, index) => (
                        <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </CardSection>

                <CardSection background="#FFFDCE" border="#DFD600">
                    <Card inputColor="#DFD600">Fazendo </Card>
                    {   
                        yellow.map((task,index) => (
                        <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }   
                </CardSection>
        
                <CardSection background="#DFFAE8" border="#0CE155">
                    <Card inputColor="#0CE155">Finalizado </Card>
                    {
                        green.map((task,index) => (
                        <Task task={task.tarefa} status={task.status} data={task.data} index={index} removeTask={RemoveTask} editTask={EditTask} key={index}/>
                        ))
                    }
                </CardSection>
            </Board>
    </Container>
  );
}

export default TodoList;