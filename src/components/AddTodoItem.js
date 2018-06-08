import React from 'react';
import './AddTodoItem.css';

class AddTodoItem extends React.Component {

  state = {
    value: ''
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.setState({value: ''});
  }

  onChange = event => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="AddTodoItem">
        <form onSubmit={this.onSubmit}>
          <div className="AddTodoItem__wrapper">
            <input type="text"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Remember the milk..." />
            <button type="submit" className="button">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodoItem;
