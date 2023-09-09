import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Home from './pages/home'
import Main from './pages/Main'

const App=()=>{
    return(
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route home element={<Home />} />
              <Route path="main" element={<Main/>} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      
    );
}

export default App;