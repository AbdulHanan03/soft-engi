import React from 'react'
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import {data} from '../data';
import Chatbot from "./Chatbot";
import HomePage from "./home";

const FrontPage = () => {
  return (
    <div>
        <Grid/>    
        <HomePage/>
      
    </div>
  )
}

export default FrontPage
