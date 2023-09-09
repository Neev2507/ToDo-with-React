import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Home from './pages/home'
import Main from './Main'

const App=()=>{
    return(
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      
    );
}

export default App;