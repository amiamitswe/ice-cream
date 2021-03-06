import React, { Component } from "react";
import IceCream from "../../components/IceCream/IceCream";
import Builder from "../../components/Builder/Builder";
import classes from "./IceCreamBuilder.module.css";

class IceCreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
    display: "none"
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    fetch("https://react-project-4817f.firebaseio.com/items.json")
      .then((response) => response.json())
      .then((responseData) => this.setState({ items: responseData }));
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate");
  };

  addScoopHandler = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  removeScoopHandler = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];

    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
    workingScoops.splice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };


  modalOpenHandler = (price) => {
    this.setState({display: "block"})
  }

  closeModalHandler = () => {
    this.setState({display: "none"})
  }
  

  render() {
    const { items, scoops, totalPrice, display } = this.state;

    return (
      <div className={[classes.container, "container"].join(" ")}>
        <IceCream scoops={scoops} />
        <Builder
          items={items}
          Price={totalPrice}
          addScoop={this.addScoopHandler}
          removeScoop={this.removeScoopHandler}
          scoops={scoops}
          modalOpenHandler={this.modalOpenHandler}
          closeModal = {this.closeModalHandler}
          display={display}
        />
      </div>
    );
  }
}

export default IceCreamBuilder;
