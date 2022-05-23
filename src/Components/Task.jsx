import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

// import { Container } from './styles';

function Task(props) {
  return (
    <div className="task">
        <h2 className="titletask">Descrição: </h2>
        <p className="texttask">{props.task}</p>
        <h2 className="titletask">Prazo: </h2>
        <p className="texttask">{props.data}</p>
        <div className="icon">
            <BsFillTrashFill className=" trash" onClick={() => props.removeTask(props.index)}/>
            <MdModeEditOutline className="edit" onClick={() => props.editTask(props.index)} />
        </div>
    </div>
  );
}

export default Task;
