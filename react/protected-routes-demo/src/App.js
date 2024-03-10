import './App.css';

import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Protected from './components/Protected';

export default function App(){
  
  const[isSignedIn, setIsSignedIn] = useState(null);

  const signIn = () => {
    setIsSignedIn(true);
  }

  const signOut = () => {
    setIsSignedIn(false);
  } 

  return (
    <div className='container mt-2'>
      <h2 className='mb-5 text-center'>React Protected Routes Example</h2>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Protected isSignedIn={isSignedIn}><Dashboard/></Protected>}>
        </Route>
        <Route path="/products" element={<Protected isSignedIn={isSignedIn}><Products/></Protected>}>
        </Route>
      </Routes>
      {isSignedIn ? (
        <div className='d-grid mt-2'>
          <button className='btn-danger' onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div className='d-grid mt-2'>
          <button className='btn-dark' onClick={signIn}>Sign In</button>
        </div>
      )}
    </div>
  )
}