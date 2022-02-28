import React from 'react';
import Card from "@mui/material/Card";

function TodoCard(props) {
  return(
    <Card style={{width: 300,}} variant="outlined">
      <p>{props.item.text}</p>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <p><small>ID: {props.item.id}</small></p>
      <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
  </Card>
  )
}

export default TodoCard;