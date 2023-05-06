import React, { useEffect, useState } from 'react';
import cl from './MainTitle.module.css'
import ReactDOM from 'react-dom';
import { useSpring, animated, easings } from 'react-spring';

const MainTitle = ({children, setStartAnimation, startAnimation}) => {
    const backdropAnimation = useSpring({
        from: startAnimation ? {opacity: 1} : {opacity: 1},
        to: {opacity: 0},
        reset: startAnimation,
        onRest: () => { 
            setStartAnimation(false)
        },
        config: {duration: 1000, easing: easings.easeInExpo}
    })

    return (
            <animated.h1 className={cl.mainTitle}>
                {children}
                {ReactDOM.createPortal(
                    <animated.div 
                        className={cl.backdrop}
                        style={{
                            opacity: 1,
                            ...backdropAnimation
                        }}
                    />,
                    document.getElementById('portal')
                )}
            </animated.h1>
    );
}

export default MainTitle;
