import React,{Component} from "react";
import { useState } from "react";
import './App.css';
import notepad from './notepad.png'
const Main=()=>{
    const [input,setInput] = useState('');
    const [deadline,setDeadline] = useState('');
    const [tasks, setTasks] = useState([]);
    const add_task=()=>{
        if(input===''){
            alert('Add your task!')
        }
        if(deadline===''){
            alert('Add your deadline!')
        }
    }
    return(
        <div class="container">
        
        <div class="to-do">
        <h2>ChecklistChampion: Conquer Your To-Dos <img src={notepad} width="50" height="50"/></h2>
            <div class="row">
                <input type="text" id="input_box" placeholder="Add your tasks" value={input} onChange={(e)=> setInput(e.target.value)}required/>
            </div>
            <div class="row">
                <input placeholder="Add deadline" id="finish" type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)}   required/>
            </div>
            <div class="button">
                <button onClick={add_task}>Add</button>
            </div>
            
           
           
       
            
        </div>
    </div>
        
        
    );

    }

export default Main;