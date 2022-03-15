import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}
const portals = document.getElementById('overlay');
const Modal = props => {
    return <>
    {ReactDom.createPortal(<BackDrop onClick={props.onClick}/>, portals)}
    {ReactDom.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portals)}
    </>
}

export default Modal;