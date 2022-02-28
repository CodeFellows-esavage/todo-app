import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import { nanoid } from 'nanoid';

function ToDo(props) {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  async function addItem(item) {
    console.log(item);
    item.todoId = nanoid();
    item.complete = false;
    let response = await fetch('https://esavage-auth-api.herokuapp.com/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
    let newItem = await response.json();
    setList([...list, newItem]);
  }

  async function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);

    let response = await fetch(`https://esavage-auth-api.herokuapp.com/api/v1/todos/${id}`, {
      method: 'DELETE',
    })
    response = await response.json();
    console.log(response);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }
  async function getList() {
    let response = await fetch('https://esavage-auth-api.herokuapp.com/api/v1/todos');
    let data = await response.json();
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    getList();
  }, [])

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `ToDo's: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete}/>
      <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
      <TodoList list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
    </>
  );
};

export default ToDo;