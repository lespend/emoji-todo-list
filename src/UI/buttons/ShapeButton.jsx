import React from 'react';
import cl from './ShapeButton.module.css';
import RectButton from './RectButton';

const ShapeButton = ({ children, className, circle, ...props }) => {
    const classList = [cl.button, className];
    if (circle) { classList.push(cl.circle) }

    return (
        <RectButton {...props} className={classList.join(' ')}>
            {children}
        </RectButton>
    );
}

export default ShapeButton;
