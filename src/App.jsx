import './App.css'
// import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Grid from './components/Grid';
import Card from './components/Card';
import Icons from './components/Icons';
import HomePage from './pages/home';
import home from './pages/home'
import {data} from './data';
import Chatbot from './pages/Chatbot.jsx';
import FrontPage from './pages/FrontPage.jsx';
import Contact from './pages/Contact.jsx';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
