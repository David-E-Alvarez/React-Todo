import React from "react";


class TodoForm extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            task: ""
        };
    }
    handleInputChange = event => {
        console.log(event.target.value);
        this.setState({ task: event.target.value });
      };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ""
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="add todo here!" 
                name="task" 
                value={this.state.task}
                onChange={this.handleInputChange}/>
                <button type="submit">Add Todo</button>
                <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;

