import React from "react";
import './App.css';
const Main=()=>{
    return(
        <div class="container">
        
        <div class="to-do">
        <h2>ChecklistChampion: Conquer Your To-Dos <img src="assets/notepad.png" width="50" height="50"/></h2>
            <div class="row">
                <input type="text" id="input-box" placeholder="Add your tasks" required/>
            </div>
            <div class="row">
                <input placeholder="Add deadline" id="finish" type="text" onfocus="(this.type = 'date')"  id="date" required/>
            </div>
            <div class="button">
                <button onclick="add_task()">Add</button>
            </div>
            <ul id="list-container" class="list">
                {/*<li class="checked draggable">Task-1 - Date</li>
                <li class="draggable">Task-2</li>
    <li class=>Task-3</li>*/}
            </ul>
           
           
          
            
        </div>
    </div>
        
    );
}

export default Main;