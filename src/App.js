import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/index";
import SignUp from "./components/Sign up/index";
import Dashboard from "./components/Dashboard/index";
import Home from "./components/Home/index";
import Firebase from './components/firebase'

function App() {

  const [firebaseIntailize , setFirebaseIntailize] = useState(false)
  useEffect(() => {
    Firebase.isIntailized().then(val => {
      setFirebaseIntailize(val)
    })
  })
  return firebaseIntailize !== false ? (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  ) : <h1>loading ....</h1>
}

export default App;
