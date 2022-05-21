import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

// import { Container } from './styles';

function Task(props) {
  return (
    <div className="task">
        <label>{props.task}</label>
        <div className="icon">
            <BsFillTrashFill className=" trash" onClick={() => props.removeTask(props.index)}/>
            <MdModeEditOutline className="edit" onClick={() => props.editTask(props.index)} />
        </div>
    </div>
  );
}

export default Task;
