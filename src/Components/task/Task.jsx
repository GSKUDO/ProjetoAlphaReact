import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import {TaskContainer} from './styles'
import {TitleTask} from './styles'
import {TextTask} from './styles'
import {Icon} from './styles'

function Task(props) {
  return (
  <TaskContainer>
    <TitleTask>Descrição: </TitleTask>
        <TextTask>{props.task}</TextTask>
    <TitleTask>Prazo: </TitleTask>
        <TextTask>{props.data}</TextTask>
    <Icon>
        <BsFillTrashFill onClick={() => props.removeTask(props.index, props.status)}/>
        <MdModeEditOutline onClick={() => props.editTask(props.index, props.status, props.data, props.task)} />
    </Icon>
  </TaskContainer>
);

}

export default Task;