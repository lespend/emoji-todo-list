import React from 'react';
import cl from './ToDoCircleListPart.module.css';
import ToDoCircleItem from './ToDoCircleItem';
import { useState } from 'react';
import MainModal from '../UI/modals/MainModal';
import ToDoCircleItemDetails from './ToDoCircleItemDetails/ToDoCircleItemDetails';

const ToDoCircleListPart = ({ items, style, level }) => {
    const [stopAnimation, setStopAnimation] = useState(false);
    function getStyles(x, y) {
        return {
            top: -y,
            right: x,
        }
    }
    return (
        <div 
        className={cl.listPart} 
        style={{
            animationPlayState: stopAnimation ? 'paused' : 'running',
            animationDirection: level % 2 == 0 ? 'reverse' : '',
        }}>
            {items.map(itemData =>
                <> 
                <ToDoCircleItem 
                    onMouseEnter={() => setStopAnimation(true)} 
                    onMouseLeave={() => setStopAnimation(false)}
                    todo={itemData.todo}
                    key={itemData.todo.id}
                    style={getStyles(itemData.x, itemData.y)} 
                />
                </>
            )}
        </div>
    );
}

export default ToDoCircleListPart;
