import React from "react";
import TodoCard from "../TodoCard/TodoCard";

function TodoList(props){

  return (
    props.list.map(item => (
      <TodoCard item={item} toggleComplete={props.toggleComplete}/>
    ))
  )

}

export default TodoList;