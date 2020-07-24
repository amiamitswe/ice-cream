import React from "react";
import Scoope from './Scoope/Scoope';
import classes from './IceCream.module.css';

const IceCream = ({scoops}) => {

  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>

        {scoops.map(flavor => <Scoope key={`${flavor}${Math.random()}`} flavor={flavor} />)}
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};

export default IceCream;
