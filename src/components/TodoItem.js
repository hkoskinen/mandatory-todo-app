import React from 'react';
import './TodoItem.css';

const TodoItem = ({id, text, handleRemoveItem}) => {
  return (
    <div className="todo-item">
      <p>{text}</p>
      <button onClick={()=>handleRemoveItem(id)} className="button"><i class="fa fa-trash-alt"></i></button>
    </div>
  );
};

export default TodoItem;
