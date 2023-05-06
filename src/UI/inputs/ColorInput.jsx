import React from 'react';
import cl from './ColorInput.module.css';

const ColorInput = (props) => {
    return (
        <input {...props} type="color" className={cl.color}/>
    );
}

export default ColorInput;
