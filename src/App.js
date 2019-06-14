import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';
import Footer from './components/todos/Footer';

class App extends Component {
  state = { 
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Router', complete: false }
    ],
    filter: 'All' 
  }

  visibleItems = () => {
    const { todos, filter } = this.state;
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Completed':
        return todos.filter( t => t.complete )
      default:
        return todos;
    }
  }

  setFilter = (filter) => {
    // this.setState({ filter: filter })
    this.setState({ filter })
  }

  handleClick = (id) => {
    const { todos } = this.state 
    this.setState({ 
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  getUniqId = () => {
    // NOTE We are just using this as a helper function 
    // for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name) => {
    const { todos } = this.state
    const newTodo =  { id: this.getUniqId(), name, complete: false }
    this.setState({ todos: [newTodo, ...todos] })
  }
  
  render() {
    const { todos, filter } = this.state
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <List name='Todo List' items={this.visibleItems()} handleClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;