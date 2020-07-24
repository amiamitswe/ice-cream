import React from 'react';
import {countBy} from 'lodash';
import classes from './Item.module.css';

const Item = ({ flavorName, addScoop, removeScoop, scoops = {}}) => {
  const scoopsByCount = countBy(scoops);
  console.log(scoopsByCount);

  return (
    <li className={classes.item}>
      <span>{flavorName}</span>
      {scoopsByCount[flavorName] >= 0 
      ? <span className={classes.quantity}>{scoopsByCount[flavorName]}</span> 
      : null}

      <div className="right">
        <button type="button" className={[classes.plus, "rounded"].join(" ")} onClick = {() => addScoop(flavorName)}>+</button>
        <button type="button" className={[classes.minus, "rounded"].join(" ")} onClick = {removeScoop.bind(this, flavorName)}>-</button>
      </div>
    </li>
  )
}

export default Item
