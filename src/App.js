import React, { Component } from 'react';
import './App.css';

const TodoItem = ({text}) => (
  <div className="todo-item">{text}</div>
);

const TodoItems = ({items}) => (
  <div className="todo-items">
    {items.length ? (
      items.length && items.map(item => <TodoItem text={item.text} />)
    ) : (
      <div>You don't have any todo items.</div>
    )}
  </div>
);

class App extends Component {
  state = {
    todoItems: [
      { text: 'Remember the milk' },
      { text: 'Find the meaning of life' },
      { text: 'Binge watch Mr. Robot' }
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
