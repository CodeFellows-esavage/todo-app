import React from 'react';

function TodoCard(props) {
  return(
    <div>
      <p>{props.item.text}</p>
      <p><small>Assigned to: {props.item.assignee}</small></p>
      <p><small>Difficulty: {props.item.difficulty}</small></p>
      <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
      <hr />
  </div>
  )
}

export default TodoCard;