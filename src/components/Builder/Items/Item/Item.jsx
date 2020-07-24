import React from 'react';
import {countBy} from 'lodash';
import classes from './Item.module.css';

const Item = ({ flavorName, addScoop, removeScoop, scoops = {}}) => {
  const scoopsByCount = countBy(scoops);

  const capitalize = word => word[0].toUpperCase()+word.slice(1).toLowerCase();

  return (
    <li className={classes.item}>
      <span>{capitalize(flavorName)}</span>
      {scoopsByCount[flavorName] >= 0 
      ? <span className={classes.quantity}>{scoopsByCount[flavorName]}</span> 
      : null}

      <div className="right">
        <button 
          type="button" 
          className={[classes.plus, "rounded"].join(" ")} 
          disabled={scoopsByCount[flavorName] >= 5 ? true :false}
          onClick = {() => addScoop(flavorName)}>+</button>
        <button 
          type="button" 
          className={[classes.minus, "rounded"].join(" ")} 
          disabled={scoopsByCount[flavorName] >= 0 ? false : true} 
          onClick = {removeScoop.bind(this, flavorName)}>-</button>
      </div>

    </li>
  )
}

export default Item;