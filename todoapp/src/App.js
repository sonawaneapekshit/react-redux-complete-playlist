import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, content: 'Buy milk' },
        { id: 2, content: 'Play games' },
      ],
    };
  }
  handleDeleteTodo = (id) => {
    let updatedTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: updatedTodos,
    });
  };
  handleUpdateTodo = (todo) => {
    todo.id = Math.random() * 10;
    let newTodoList = [...this.state.todos, todo];
    this.setState({
      todos: newTodoList,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="blue center-align">Todo list</h1>
        <Todos
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <AddTodos updateTodos={this.handleUpdateTodo} />
      </div>
    );
  }
}

export default App;
