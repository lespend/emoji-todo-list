import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, ...props}) => {
    return (
        <div>
            {todos.map((todo) => {
                return <ToDoItem todo={todo} key={todo.id} change={props.change} remove={props.remove}/>
            })}
        </div>
    );
}

export default ToDoList;
