import React from 'react';
import './App.css'
import { Navbar } from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element="Home"/>
          <Route path="/" element="Product"/>
          <Route path="/" element="Checkout"/>
        </Routes>
       </BrowserRouter>
    
  )
}

export default App
