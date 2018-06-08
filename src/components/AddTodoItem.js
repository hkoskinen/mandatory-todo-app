import React from 'react';

class AddTodoItem extends React.Component {

  state = {
    val: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.val);
    this.setState({val: ''});
  }

  onChange = (e) => {
    this.setState({val: e.target.value});
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="text"
              value={this.state.val}
              onChange={this.onChange}
              placeholder="Remember the milk..." />
            <button type="submit" >Add</button>
          </div>
        </form>
      </div>

    );

  }
}

export default AddTodoItem;
