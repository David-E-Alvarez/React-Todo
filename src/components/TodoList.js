// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component{
    
    render(){
        return(
            <div>
                {console.log("props in TodoList", this.props.todos)}                
                {this.props.todos.map(task =>{                
                    return <Todo 
                    toggleCompleted={this.props.toggleCompleted} 
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    />
                })}
                
            </div>
        )
    }
}

export default TodoList;
