import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import TodoItems from './components/TodoItems';

class App extends Component {
  state = {
    todoItems: [
      { text: 'Remember the milk', id: uuidv4() },
      { text: 'Find the meaning of life', id: uuidv4() },
      { text: 'Binge watch Mr. Robot', id: uuidv4() }
    ]
  }

  handleRemoveItem = (id) => {
    const {todoItems} = this.state;
    let remainingItems = todoItems.filter(item => {
      if (item.id !== id) return true;
    });
    this.setState({todoItems: remainingItems});
  }

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TodoItems
          handleRemoveItem={this.handleRemoveItem}
          items={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
