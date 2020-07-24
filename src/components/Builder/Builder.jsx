import React from "react";
import Items from "./Items/Items";
import TotalPrice from "./TotalPrice/TotalPrice";
import Modal from "./Modal/Modal";
import classes from "./Builder.module.css";

const Builder = ({ items, Price, addScoop, removeScoop,scoops }) => {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>

        <Items items={items} addScoop={addScoop} removeScoop={removeScoop} scoops ={scoops} />
        <TotalPrice Price={Price} />

        <button type="button" className={[classes.order, "rounded"].join(" ")}>
          Add to Cart
        </button>
      </div>

      <Modal>hello Modal</Modal>
    </div>
  );
};

export default Builder;
