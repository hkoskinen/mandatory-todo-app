import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({items, handleRemoveItem}) => (
  <div className="todo-items">
    {items.length ? (
      items.length && items.map(item =>
        <TodoItem
          handleRemoveItem={handleRemoveItem}
          id={item.id}
          key={item.id}
          text={item.text} />)
    ) : (
      <div>You don't have any todo items.</div>
    )}
  </div>
);

export default TodoItems;
