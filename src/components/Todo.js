import React from "react";

const Todo = props=>{
    return(
        <div 
        onClick={()=>props.toggleCompleted(props.id)}
        className={props.completed ? "done" : ""}        
        >
            <h1>{props.task}</h1>
        </div>
        )
    }


export default Todo;