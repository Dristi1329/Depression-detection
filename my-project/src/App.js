// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './component/Contact';
import Footer from './component/Footer';




const App= ()=> {
  return (
    <div>
      <Navbar />

     


    


      <Routes>
          <Route path='/' element ={ <Homepage />}/>

           <Route path="contact" element={  <Contact/>} />
          
      </Routes>
      <Footer/>



    </div>
  )
}

export default App
