import React from 'react';
import cl from './ToDoItem.module.css';

const ToDoItem = ({ todo, change, remove }) => {
    let itemClassList = [cl.item]
    if (todo.complete) {
        itemClassList.push(cl.itemComplete)
    }

    function removeHandler(e) {
        e.stopPropagation();
        remove(todo.id)
    }

    return (
        <div className={itemClassList.join(' ')} onClick={() => change(todo.id, {complete: !todo.complete})}>
            <div className={cl.content}>
                <div className={cl.emoji} style={{backgroundColor: todo.color}}>{todo.emoji}</div>
                <h2 className={cl.header}>{todo.title}</h2>
                <p className={cl.description}>{todo.body}</p>
            </div>
            <div className={cl.buttons}>
                <button onClick={removeHandler} className={cl.deleteButton}>Удалить</button>
            </div>
        </div>
    );
}

export default ToDoItem;
