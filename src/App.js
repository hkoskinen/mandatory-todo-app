import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

const TodoItem = ({text}) => (
  <div className="todo-item">{text}</div>
);

const TodoItems = ({items}) => (
  <div className="todo-items">
    {items.length ? (
      items.length && items.map(item => <TodoItem key={item.id} text={item.text} />)
    ) : (
      <div>You don't have any todo items.</div>
    )}
  </div>
);

class App extends Component {
  state = {
    todoItems: [
      { text: 'Remember the milk', id: uuidv4() },
      { text: 'Find the meaning of life', id: uuidv4() },
      { text: 'Binge watch Mr. Robot', id: uuidv4() }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TodoItems items={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
