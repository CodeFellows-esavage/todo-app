import React from 'react';
import ToDo from './components/Todo/Todo';
import Settings from './context/settings';

export default function App() {
  
  return (
    <>
      <Settings>
        <ToDo />
      </Settings>
    </>
  ) 
}