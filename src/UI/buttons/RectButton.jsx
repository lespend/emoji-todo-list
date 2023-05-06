import React from 'react';
import cl from './RectButton.module.css';

const RectButton = ({className, children, ...props}) => {
    let classList = [cl.button, className, cl[props.animation]]
    return (
        <button {...props} className={classList.join(' ')}>
            {children}
        </button>
    );
}

export default RectButton;
