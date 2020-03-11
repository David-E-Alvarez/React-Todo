import React from 'react';
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
  toggleCompleted = clickedTaskId => {
    this.setState({
      todos: this.state.todos.map(task =>{
        if(task.id === clickedTaskId){
          return{
            ...task,
            completed: !task.completed
          }
        }else{
          return task;
        }
      })
    })
    console.log("this.state: ", this.state)
  }

  addTask = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  clearCompleted = (_) =>{
    const newArr = this.state.todos.filter(t =>{
      return t.completed === false;
    })
    this.setState({todos: newArr})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
         todos={this.state.todos}
         toggleCompleted={this.toggleCompleted}
         />
        <TodoForm addTask={this.addTask}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
