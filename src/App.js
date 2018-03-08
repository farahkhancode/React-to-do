import React, { Component } from 'react';
import './App.css';
 import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
  todos: [
    { description: 'Make dinner', isCompleted: true },
    { description: 'Help kids with homework', isCompleted: false  },
    { description: 'Work on Bloc', isCompleted: false }
  ],
    newTodoDescription: ''
};

 }



 deleteToDo(index) {
  const remainingToDos = this.state.todos.filter((todo, i) => i !== index);
     this.setState({
         todos: remainingToDos
              });
    console.log(remainingToDos);

   }



 handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

 handleSubmit(e) {
   e.preventDefault();
   if (!this.state.newTodoDescription) { return }
   const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
   this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
 }

 toggleComplete(index) {
   const todos = this.state.todos.slice();
   const todo = todos[index];
   todo.isCompleted = todo.isCompleted ? false : true;
   this.setState({ todos: todos });
 }

  render() {
    return (
      <div className="App">
      <form onSubmit={ (e) => this.handleSubmit(e) }>
      <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
      <input type="submit" />
      </form>
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index }
        description={ todo.description }
        isCompleted={ todo.isCompleted }
        toggleComplete={ () => this.toggleComplete(index) }
        isDeleted={ this.isDeleted }
        deleteToDo={ () => this.deleteToDo(index)}/>
          )}

        </ul>

      </div>
    );
  }
}


export default App;
