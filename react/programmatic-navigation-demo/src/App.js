import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App(){
  return (
    <div>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;