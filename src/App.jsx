import React from 'react';
import './App.scss';
import ToDo from './components/Todo/Todo';
import Settings from './context/settings';
import NavBar from './components/NavBar/NavBar'
import SettingsForm from './components/SettingsForm/SettingsForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  
  return (
    <BrowserRouter>
      <Settings>
        <NavBar />
        <Routes>
          <Route path="/" element={<ToDo />}/>
          <Route path="/settings" element={<SettingsForm />}/>
        </Routes>
      </Settings>
    </BrowserRouter>
  ) 
}