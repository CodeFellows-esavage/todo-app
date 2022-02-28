import React from 'react';
import './App.scss';
import ToDo from './components/Todo/Todo';
import Settings from './context/settings';
import AuthProvider from './context/auth';
import NavBar from './components/NavBar/NavBar'
import SettingsForm from './components/SettingsForm/SettingsForm';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Settings>
          <NavBar />
          <Auth capability="read">
            <Routes>
              <Route path="/" element={<ToDo />}/>
              <Route path="/settings" element={<SettingsForm />}/>
            </Routes>
          </Auth>
        </Settings>
      </AuthProvider>
    </BrowserRouter>
  ) 
}