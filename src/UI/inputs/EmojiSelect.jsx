import React from 'react';
import cl from './EmojiSelect.module.css';
import arrowIconSrc from '../../assets/icons/down-arrow.svg';
import { useState, useEffect } from 'react';
import EmojiService from '../../API/EmojiService';

const EmojiSelect = (props) => {
    const [selectValue, setSelectValue] = useState(props.value);
    const [emojies, setEmojies] = useState([]);
    async function fetchEmoji() {
        const response = await EmojiService.getAll();
        setEmojies(response);
    }

    useEffect(() => {   
        fetchEmoji();
    }, [])

    const [active, setActive] = useState(false)
    let selectClassList = [cl.select]

    if (active) {
        selectClassList.push(cl.active);
    }

    function emojiClickHandler(e) {
        props.onChange(e.target.textContent)
        setSelectValue(e.target.textContent)
        setActive(false)
    }

    return (
        <div className={selectClassList.join(' ')}>
            <div className={cl.selectHeader} onClick={() => setActive(!active)}>
                <span className={cl.selectValue}>{selectValue}</span>
                <img className={cl.selectIcon} src={arrowIconSrc} alt="Иконка стрелочки вниз" />
            </div>
            <div className={cl.selectContent}>
                {emojies.map((group) => {
                    return group.emoji.map((emoji) => {
                        return <div onClick={emojiClickHandler} className={cl.selectItem}>{String.fromCodePoint(emoji.base[0])}</div>
                    })
                })}
            </div>
        </div>
    );
}

export default EmojiSelect;
