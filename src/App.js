import React from 'react';
import './App.css';
import {  Route , Routes  } from 'react-router-dom'
import Login from './components/Login/index'
import SignUp from './components/Sign up/index'
// import Dashboard from './components/Dashboard/index'
import Home from './components/Home/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
