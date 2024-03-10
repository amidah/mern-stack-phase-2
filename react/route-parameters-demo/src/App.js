import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App(){
  return (
    <div>
      <Header />

       <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/user/:userId" element={<UserProfile />}></Route>
       </Routes>

       <Footer />
    </div>
  );
    

}

export default App;