import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import WorkProjects from './components/pages/WorkProjects';
import NaspiFood from './components/pages/NaspiFood';
import SouvenirShop from './components/pages/SouvenirShop';
import Education from './components/pages/Education';
import Creep from './components/pages/Creep';
import Footer from './components/Footer';
import logo from './images/logo-1.png'
import Recipenomics from './components/pages/Recipenomics';



function App() {
  return (
<div className='page-container'>



  <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Creep/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/work-projects' element={<WorkProjects/>} />
      <Route path='/naspi-food'  element={<NaspiFood/>} />
      <Route path='/recipenomics'  element={<Recipenomics/>} />
      <Route path='/souvenir-shop'element={<SouvenirShop/>} />
      <Route path='/education' element={<Education/>} />
    </Routes>
  </Router>
  <div className='logo-container'>
  <img src={logo} className='logo' alt='' />
  </div>
  <Footer />
  </div>
  );
}

export default App;
