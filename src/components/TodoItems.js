import React from 'react';

import TodoItem from './TodoItem';

const TodoItems = ({items}) => (
  <div className="todo-items">
    {items.length ? (
      items.length && items.map(item => <TodoItem key={item.id} text={item.text} />)
    ) : (
      <div>You don't have any todo items.</div>
    )}
  </div>
);

export default TodoItems;
