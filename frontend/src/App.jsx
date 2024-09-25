import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavigationType } from 'react-router-dom';

import './App.css';
import SignUp from '../pages/signup/signUp';
import SignIn from '../pages/SignIn';
import Login from '../pages/login/login';

import Home from '../pages/home/Home';
import TaskManager from '../pages/task/task';
import Profile from './components/Profile';
import { AuthProvider,AuthContext } from '../context/AuthContext';


/* 
const PrivateRouter=({element,isAuth})=>{
  console.log(isAuth);
  
  return isAuth? element : <Navigate to="/signup"/>
}
 */




function App() {

 
  return (
    <AuthProvider>
   <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
         {/*  <Route path="/taskview" element={isAuth ? <TaskManager />: <Navigate to={'/login'}/> } /> */}
          <Route path="/taskview" element={<TaskManager />}/> 
        </Routes>
  
  </div>
    
    </AuthProvider>
  );
}

export {App,AuthContext};
