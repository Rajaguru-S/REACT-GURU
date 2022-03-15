import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Overlay = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const Modal = props => {
return <Card className={classes.modal}>
<header className={classes.header}>
  <h2>{props.title}</h2>
</header>
<div className={classes.content}>
  <p>{props.message}</p>
</div>
<footer className={classes.actions}>
  <Button onClick={props.onConfirm}>Okay</Button>
</footer>
</Card>
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Overlay onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
      {ReactDom.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('modal-root'))}
      
    </>
  );
};

export default ErrorModal;
