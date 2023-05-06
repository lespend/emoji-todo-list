import React from 'react';
import cl from './MainInput.module.css';

const MainInput = (props) => {
    return (
        <input {...props} className={cl.mainInput} />
    );
}

export default MainInput;
