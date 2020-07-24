import React from "react";
import Item from "./Item/Item";
import classes from './Items.module.css';

const Items = ({ items, addScoop, removeScoop, scoops }) => {
  const flavors = Object.keys(items);
  return (
    <div>
      <ul>
        {flavors.length <= 0 ? (
          <div className={classes.loader}></div>
        ) : (
          flavors.map((flavor) => (
            <Item
              key={flavor}
              flavorName={flavor}
              addScoop={addScoop}
              removeScoop={removeScoop}
              scoops={scoops}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Items;
