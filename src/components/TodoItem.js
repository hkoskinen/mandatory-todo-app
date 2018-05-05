import React from 'react';

const TodoItem = ({id, text, handleRemoveItem}) => {
  return (
    <div className="todo-item">
      <button onClick={()=>handleRemoveItem(id)}>X</button> {text}
    </div>
  );
};

export default TodoItem;
