import React from 'react';

export default props=>(
<div className="todo-container">

<div className={props.todo.complete ? "todo-list-complete" : "todo-list-pending"} 
onClick={props.toggleComplete}>
{props.todo.text}</div>

<button onClick={props.onDelete}>X</button>

</div>
);
