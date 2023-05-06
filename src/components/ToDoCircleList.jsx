import React, { useState } from 'react';
import ToDoCircleItem from './ToDoCircleItem';
import cl from './ToDoCircleList.module.css';
import { useRef, useEffect } from 'react';
import ToDoCircleListPart from './ToDoCircleListPart';

const ToDoCircleList = (props) => {
    const [stopAnimation, setStopAnimation] = useState(false)
    

    function getCircleLists() {
        let lists = [];
        let maxCard = 10;
        let r = 100;
        let level = 0;
        let countRemaining = props.todos.length;
        let index = 0;

        for (let i = 0; i < props.todos.length; i++) {
            if (index < maxCard) {
                const angle = countRemaining <= maxCard ? 2*Math.PI / countRemaining * index : 2*Math.PI / maxCard * index;
                const x = r*Math.cos(angle);
                const y = r*Math.sin(angle);
                const todo = props.todos[i];

                if (!lists[level]) {
                    lists[level] = [];
                }
                lists[level].push({todo, x, y})
                index++;
            } else {
                index -= maxCard;
                countRemaining -= maxCard;
                maxCard *= 2;
                r += 80;
                level += 1;
                i--;
            }
        }

        return lists;
    }

    return (
        <>
        {getCircleLists().map((items, i) => 
            <ToDoCircleListPart items={items} level={i}/>
        )}
        </>
    );
}

export default ToDoCircleList;
