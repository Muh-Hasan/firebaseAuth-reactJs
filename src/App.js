import React from 'react';
import './App.css';
import {  Route , Routes  } from 'react-router-dom'
import Login from './components/Login/index'
import SignUp from './components/Sign up/index'
import Dashborad from './components/Dashborad/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashborad' element={<Dashborad />} />
      </Routes>
    </div>
  );
}

export default App;
