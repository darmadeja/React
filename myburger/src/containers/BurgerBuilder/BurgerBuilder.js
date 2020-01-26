import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Utilities/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/Utilities/Spinner/Spinner";

const INGRIDIENT_PRICES = {
  Salad: 0.5,
  Bacon: 0.4,
  Cheese: 0.6,
  Meat: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    lading: false
  };

  addIngrideintHandler = type => {
    // console.log("Burger Builder :: Type :", type, "state", this.state);

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridient = { ...this.state.ingredients };
    updatedIngridient[type] = updatedCount;
    // console.log(
    //   "Burger Builder :: oldCount :",
    //   oldCount,
    //   "updatedCount : ",
    //   updatedCount
    // );

    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    // console.log(
    //   "Burger Builder :: oldPrice :",
    //   oldPrice,
    //   "updatedPRice : ",
    //   newPrice
    // );

    // console.log("Burger Builder :: this.state :", this.state);
    this.setState({ ingredients: updatedIngridient, totalPrice: newPrice });
    // console.log("Burger Builder :: this.state :", this.state);
    this.updatePurchaseState(updatedIngridient);
  };

  removeIngrideintHandler = type => {
    if (this.state.ingredients[type] > 0) {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngridient = { ...this.state.ingredients };
      updatedIngridient[type] = updatedCount;

      const priceAddition = INGRIDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;

      this.setState({ ingredients: updatedIngridient, totalPrice: newPrice });
      this.updatePurchaseState(updatedIngridient);
    }
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  updatePurchasingState = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    console.log("purchaseCanceled");
    this.setState({ purchasing: false });
    this.setState({ loading: false });
  };

  purchaseContinueHandler = () => {
    // alert("Continuing the Purchase");
    // this.setState({ purchasing: false });
    const orderSummary = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Deja",
        address: "123 test st",
        email: "test.test.com"
      },
      deliverytype: "fast"
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", orderSummary)
      .then(response => this.setState({ loading: false, purchasing: false }))
      .catch(error => this.setState({ loading: false, purchasing: false }));
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let loading = (
      <OrderSummary
        ingredients={this.state.ingredients}
        clickContinue={this.purchaseContinueHandler}
        clickCancel={this.purchaseCancelHandler}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) {
      console.log("spinner");
      loading = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {loading}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngrideintHandler}
          ingredientsRemoved={this.removeIngrideintHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={!this.state.purchasable}
          ordered={this.updatePurchasingState}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
