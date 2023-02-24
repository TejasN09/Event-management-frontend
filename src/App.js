import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Loginform from "./components/Loginform";


function App() {
  return (
    <div className="body">
       <Header />
        <h1>Event Management</h1>
       <Footer />
      <Loginform></Loginform>
    </div>
  );
}

export default App;
