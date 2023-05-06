import React from 'react';
import MainModal from '../../UI/modals/MainModal';
import cl from './ToDoCircleItemDetails.module.css'

const ToDoCircleItemDetails = ({ todo, active, setActive }) => {
    return (
        <MainModal 
            active={active}
            setActive={setActive} 
            className={cl.modal}
        >
            <div className={cl.line} style={{background: todo.color}}></div>
            <div className={cl.emoji}>{todo.emoji}</div>
            <h2 className={cl.title}>{todo.title}</h2>
            <p className={cl.body}>{todo.body}</p>
        </MainModal>
    );
}

export default ToDoCircleItemDetails;
