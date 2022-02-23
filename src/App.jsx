import React from 'react';
import ToDo from './components/Todo/Todo';
import Settings from './context/settings';
import '@blueprintjs/core/lib/css/blueprint.css';

export default function App() {
  
  return (
    <>
      <Settings>
        <ToDo />
      </Settings>
    </>
  ) 
}