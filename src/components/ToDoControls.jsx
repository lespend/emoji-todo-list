import React from 'react';
import cl from './ToDoControls.module.css';
import RectButton from '../UI/buttons/RectButton';
import PlusIcon from '../assets/icons/plus.svg';
import DataAddIcon from '../assets/icons/data-add.svg';
import ShapeButton from '../UI/buttons/ShapeButton';
import RectButtonText from '../UI/buttons/RectButtonText';

const ToDoControls = ({ showModal, display, setDisplay, createFakeData, setStartAnimation }) => {
    const classList = [cl.buttons];
    function displayButtonHandle() {
        setStartAnimation(false);
        setStartAnimation(true);
        setDisplay(!display);
    }
    return (
        <div className={classList.join(' ')}>
            <RectButton onClick={createFakeData} className={cl.button} animation='animation-scale'>
                <img src={DataAddIcon} alt="Иконка" />
                Создать тестовые данные
            </RectButton>
            <RectButton className={cl.button} onClick={() => showModal(true)} animation='animation-scale'>
                <img src={PlusIcon} alt="Иконка" />
                Создать
            </RectButton>
            <ShapeButton circle={display} onClick={displayButtonHandle} className={cl.button} animation='animation-scale'>
                Изменить отображение
            </ShapeButton>
      </div>
    );
}

export default ToDoControls;
