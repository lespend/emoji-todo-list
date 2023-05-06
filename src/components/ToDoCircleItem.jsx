import React from 'react';
import cl from './ToDoCircleItem.module.css';
import ToDoCircleItemDetails from './ToDoCircleItemDetails/ToDoCircleItemDetails';
import { useState } from 'react';

const ToDoCircleItem = ({todo, style, ...props}) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div {...props} onClick={() => setActive(true)} className={cl.item} style={{backgroundColor: todo.color, ...style}}>
                <div className={cl.emoji}>{todo.emoji}</div>
            </div>
            <ToDoCircleItemDetails todo={todo} active={active} setActive={setActive} />
        </>
    );
}

export default ToDoCircleItem;
