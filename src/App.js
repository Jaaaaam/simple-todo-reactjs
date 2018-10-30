import React, { Component } from 'react';
import ToDoList from './Components/ToDoList'
import './App.css';

class ToDoApp extends Component {
  constructor() {
    super()
      this.state = {
        toDoList: [
            {
                id: 1,
                name: 'Clean up room',
                description: 'Fix the bed and sweep the room',
                isCompleted: true
            }
        ],
        newTask: ''
    }
  }

  toggleCheckBox(task) {
    let todoList = this.state.toDoList
    let newTodoList = todoList.map((listItem)=>
      {if (listItem.id == task.id) {
        listItem.isCompleted = !listItem.isCompleted
      }}
        
    )
    this.setState({
      todoList: newTodoList
    }, ()=> {

    })
  }

  addTask() {
    let newTaskList = this.state.toDoList
    let newTask = {
      id: this.state.toDoList.length+1,
      name: this.state.newTask,
      completed: false
  }

    newTaskList.push(newTask)
    this.setState({ 
      toDoList: newTaskList,
      newTask: ''
    })
  }

  handleTaskInputChange(e) {
    e.preventDefault()

    let newTask = e.target.value
    this.setState({
      newTask
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Simple To-Do App  </h1>
        <input name='task' type='text' onChange={this.handleTaskInputChange.bind(this)} value={this.state.newTask}></input>
        <button onClick={this.addTask.bind(this)}>Add Task</button>
        <ToDoList list={this.state.toDoList} toggleCheckBox ={this.toggleCheckBox.bind(this)}></ToDoList>
      </div>
    );
  }
}

export default ToDoApp;
