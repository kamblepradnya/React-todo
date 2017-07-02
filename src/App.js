import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todolist';
import AddTodo from './components/addtodo';
export default class App extends Component {
    constructor(props){
      super(props);

      this.state = {todos: [
        {task : 'task1','isDone': true},
        {task : 'task2','isDone': false},
        {task : 'task3','isDone': true}
      ]};
    }

    
  createTodo(newTodo){
     const todos =  this.state.todos;
    if(!newTodo){
      alert('Please add some task');
      return;
    }
    
   todos.push({
          task: newTodo,
          isDone: false
      });

      this.setState({
          todos
      });
      console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <br/>
          <AddTodo onSubmitCall={this.createTodo.bind(this)}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}


