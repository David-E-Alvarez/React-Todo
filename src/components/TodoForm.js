import React from "react";


class TodoForm extends React.Component{    
    handleInputChange = event => {
        console.log(event.target.value);
        this.setState({ name: event.target.value });
      };

    handleButtonClick = e => {
        e.preventDefault();
        console.log("button clicked");
    }
    render() {
        return(
            <form>
                <input type="text" placeholder="add todo here!" onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>Add Todo</button>
                <button onClick={this.handleButtonClick}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;

