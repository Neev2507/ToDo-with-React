import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Main from './Main'
import { useOutletContext } from "react-router";
const Home=()=>{
    return(
        <div className='container'>
        
        <div className="to-do">
        <h2>CheckList Champion: Conquer your ToDos</h2>
        <form action="/home">
            <div class="container">
                <div>
                    <label for="name"><b>Name</b></label><br></br>
                    <input className="login" type="text" placeholder="Enter your name" name="name" required/><br/>
                    <label for="email"><b>Email</b></label><br></br>
                    <input class="login" type="text" placeholder="Enter email" name="email" required/><br/>
                    <label for="password"><b>Password</b></label><br></br>
                  <input class="login" type="password" placeholder="Enter Password" name="password" required/><br/>
              
                  <button type="submit" >Login</button><br></br><br/>
                  <label class='remember'>
                    <input  type="checkbox" checked="checked" name="remember"/> Remember me
                  </label>
                  </div>
                </div>
                
              </form>

                </div>
            </div>
        
        
    );
}

export default Home;