import React from 'react';
import ReactDOM from 'react-dom';
import cl from './MainModal.module.css';

const portal = document.getElementById('portal')

const MainModal = ({children, active, setActive, style, className}) => {
    let modalClassList = active ? [cl.modal, cl.active] : [cl.modal];
    return ReactDOM.createPortal(
        <div className={modalClassList.join(' ')} onClick={() => setActive(false)}>
            <div style={style} className={[cl.modalContent, className].join(' ')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>  
       </div>,
       portal
    );
}

export default MainModal;
