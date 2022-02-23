import React, {useContext, useState, useEffect} from "react";
import TodoCard from "../TodoCard/TodoCard";
import { SettingsContext } from '../../context/settings.js';
import './TodoList.scss';


function TodoList(props){

  const [pages, setPages] = useState([]);
  const [currentPage, updateCurrentPage] = useState(1);
  let settings = useContext(SettingsContext);
  console.log(settings);

  function handleClick(e){
    let pageNum = parseInt(e.target.textContent);
    updateCurrentPage(pageNum);
  }

  useEffect(() => {
    let numPages = Math.ceil(props.list.length/settings.displayMax);
    let pageArr = []
    for(let i = 1; i <= numPages; i++){
      pageArr.push(i);
    }
    setPages(pageArr);
  }, [props.list.length], [currentPage]);
  console.log('Pages', pages);
    
  let todoList = []
  if(settings.displayCompleted === false){
    props.list.forEach(todo => {
      if(todo.complete === false) todoList.push(todo);
    })
  } else{
    todoList = props.list;
  }

  console.log('TODO LIST: ', todoList);

  const startIndex = (currentPage * settings.displayMax) - settings.displayMax;
  const endIndex = currentPage * settings.displayMax;
  const currentTodos = todoList.slice(startIndex, endIndex);

  return (
    <>
      {currentTodos.map(item => (
        <TodoCard key={item.id} item={item} toggleComplete={props.toggleComplete}/>
      ))}
      {pages.map(pageNum => (
        <span onClick={handleClick} key={pageNum}>{pageNum}</span>
      ))}
      <p>Page Count: {pages.length}</p>
    </>

  )

}

export default TodoList;