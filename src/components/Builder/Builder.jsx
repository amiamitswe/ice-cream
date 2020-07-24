import React from "react";
import Items from "./Items/Items";
import TotalPrice from "./TotalPrice/TotalPrice";
import Modal from "./Modal/Modal";
import classes from "./Builder.module.css";

const Builder = ({ items, Price, addScoop, removeScoop, scoops, modalOpenHandler, display , closeModal}) => {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>

        <Items items={items} addScoop={addScoop} removeScoop={removeScoop} scoops ={scoops} />
        <TotalPrice Price={Price} />

        <button 
          type="button" 
          className={[classes.order, "rounded"].join(" ")} 
          onClick={()=> modalOpenHandler(Price)}
          disabled = {Price <= 0 ? true : false}>
          Add to Cart
        </button>
      </div>

      <Modal display={display} closeModal={closeModal}>
        Hello React <br/> 
        Your total price is : {Price.toFixed(2)} taka 
        <button className={classes.payment}>Palyment</button>
      </Modal>
    </div>
  );
};

export default Builder;
