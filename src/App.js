import React from 'react';
import "./components/Todo.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const todos = [
  {
    task: 'career story assignment',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'yoga class',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'gym',
    id: 1528817084359,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoArray={this.state.todos}/>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
