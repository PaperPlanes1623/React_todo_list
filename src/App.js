import React, { Component } from 'react';
import List from './components/todos/List';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Router', complete: false }
    ]
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
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name) => {
    const { todos } = this.state
    const newTodo = { id: this.getUniqId(), name, complete: false}
    this.setState({ todos: [...todos, newTodo] })
  }

  // renderTodos = () => {
  //   const { todos } = this.state
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.name}</li>
  //     )
  //   })
  // }

  render() {
    const { todos } = this.state
  return (
    <div>
      <TodoForm addItem={this.addItem}/>
      <List name='Todo List' items={todos} handleClick={this.handleClick}/>
    </div>
   );
  }
}

export default App;
