import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

function TodoCard(props) {
  return(
    <Card style={{width: 300,}}elevation={Elevation.FOUR}>
      <p>{props.item.text}</p>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
      <hr />
  </Card>
  )
}

export default TodoCard;