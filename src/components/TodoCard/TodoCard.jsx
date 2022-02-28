import React from 'react';
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoCard(props) {
  console.log(props.item);
  return(
    <Card style={{width: 300,}} variant="outlined">
      <p>{props.item.text}</p>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <p><small>ID: {props.item.todoId}</small></p>
      <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
      <IconButton aria-label="delete" onClick={()=> props.deleteItem(props.item.id)}>
        <DeleteIcon />
      </IconButton>
  </Card>
  )
}

export default TodoCard;