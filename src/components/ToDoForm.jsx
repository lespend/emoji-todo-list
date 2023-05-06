import React from 'react';
import MainInput from '../UI/inputs/MainInput';
import cl from './ToDoForm.module.css';
import RectButton from '../UI/buttons/RectButton';
import RectButtonText from '../UI/buttons/RectButtonText';
import ColorInput from '../UI/inputs/ColorInput';
import EmojiSelect from '../UI/inputs/EmojiSelect';
import { useState } from 'react';

const ToDoForm = (props) => {
    const todoDefaultValue = {id: Date.now(), color: '#000000', emoji: '❤️', title: '', body: '', complete: false}
    const [todo, setTodo] = useState(todoDefaultValue)

    function postForm(e) {
        e.preventDefault();
        props.create(todo);
        setTodo({...todo, id: Date.now(), title: '', body: ''});
    }

    return (
        <form className={cl.form}>
            <ColorInput value={todo.color} onChange={(e) => setTodo({...todo, color: e.target.value})} />
            <EmojiSelect value={todo.emoji} onChange={(emoji) => setTodo({...todo, emoji: emoji})}/>
            <MainInput value={todo.title} type="text" placeholder="Заголовок" onChange={(e) => setTodo({...todo, title: e.target.value})} />
            <MainInput value={todo.body} type="text" placeholder="Описание" onChange={(e) => setTodo({...todo, body: e.target.value})} />
            <RectButtonText onClick={postForm} animation="animation-opacity">Создать</RectButtonText>
        </form>
    );
}

export default ToDoForm;
