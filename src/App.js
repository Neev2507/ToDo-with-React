import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './pages/App.css';
import Home from './pages/home'
import Main from './pages/Main'
import Layout from './pages/layout'
const App=()=>{
    return(
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
              <Route path="main" element={<Main/>} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      
    );
}

export default App;