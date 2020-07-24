import React from 'react';
import classes from './TotalPrice.module.css';

const TotalPrice = ({Price = 0}) => {
  return (
    <div className={classes.total}>
      <div>Total Price</div>
      <div>{Price.toFixed(2)} Tk</div>
    </div>
  )
}

export default TotalPrice;
