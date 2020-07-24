import React from "react";
import classes from "./Modal.module.css";

const Modal = ({children, display, closeModal}) => {
  return (
    <div>
      <div className={classes.backdrop} style={{display: display}} />
      <div className={classes.modalBody} style={{display: display}}>
        <button 
          className={classes.close_modal} 
          onClick={closeModal}>&times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
