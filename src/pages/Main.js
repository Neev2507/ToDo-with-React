import React,{Component} from "react";
import { useState } from "react";
import './App.css';
import notepad from './notepad.png'
import checked from './checked.png'
import unchecked from './unchecked.png'
const Main=()=>{
    const cross='X';
    const [input,setInput] = useState('');
    const [deadline,setDeadline] = useState('');
    const [tasks, setTasks] = useState([]);
    const newTask=input+' - '+deadline
    const add_task=()=>{
        if(input===''){
            alert('Add your task!')
            return
        }
        if(deadline===''){
            alert('Add your deadline!')
            return
        }
        setTasks(
            [...tasks, newTask]
        )
        
    }
    const clicked=(e)=>{
        
            if(e.target.tagName==='LI'){
                e.target.classList.toggle('checked');
               
            }
            else if(e.target.tagName==='SPAN'){
                e.target.parentElement.remove();
               
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
                
            
        
        <ul onClick={clicked} className="list">
          {
            tasks.map((task, i) => {
              return <li className="checked" key={i}>{task}<span>{cross}</span></li>;
            }) 
          }
        </ul>
            </div>
            </div>
        );
          
    }

export default Main;