import React from 'react';
import cl from './RectButtonText.module.css';

const RectButtonText = ({className, children, ...props}) => {
    let classList = [cl.button, className, cl[props.animation]]
    return (
        <button {...props} className={classList.join(' ')}>
            {children}
        </button>
    );
}

export default RectButtonText;
