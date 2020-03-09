// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component{
   
    render(){
        return(
            <div>
                {console.log("this.props.todoArray: ", this.props.todoArray)}
                {/* <h1>{this.props.todoArray[0].task}</h1> */}
                {this.props.todoArray.map(tasks =>{
                   return <h1>{tasks.task}</h1> 
                })}
                
            </div>
        )
    }
}

export default TodoList;
