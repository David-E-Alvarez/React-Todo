import React from "react";

class Todo extends React.Component{
    render(){
        return(
            <div>
                {/* {console.log("this.props.task: ", this.props.task)} */}
                <h1>{this.props.task}</h1>
            </div>
        )
    }
}

export default Todo;