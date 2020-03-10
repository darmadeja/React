import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Utilities/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/Utilities/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGRIDIENT_PRICES = {
  Salad: 0.5,
  Bacon: 0.4,
  Cheese: 0.6,
  Meat: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    errorLoading: false
  };

  componentDidMount = () => {
    axios
      .get("/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ errorLoading: true }));
    // .finally(console.log("Component Did Mount: Current State: ", this.state));
  };

  addIngrideintHandler = type => {
    // console.log("Burger Builder :: Type :", type, "state", this.state);

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridient = { ...this.state.ingredients };
    updatedIngridient[type] = updatedCount;

    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

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
    this.setState({ purchasing: false });
    this.setState({ loading: false });
  };

  purchaseContinueHandler = () => {
    // alert("Continuing the Purchase");
    // this.setState({ purchasing: false });
    // const orderSummary = {
    //   ingredient: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Deja",
    //     address: "123 test st",
    //     email: "test.test.com"
    //   },
    //   deliverytype: "fast"
    // };
    // this.setState({ loading: true });
    // axios
    //   .post("/orders.json", orderSummary)
    //   .then(response => this.setState({ loading: false, purchasing: false }))
    //   .catch(error => this.setState({ loading: false, purchasing: false }));
    const queryParam = [];
    for (let i in this.state.ingredients) {
      queryParam.push(
        encodeURIComponent(i) + // this works even without the encodeURIComponent
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParam.push(`totalPrice=${this.state.totalPrice}`);
    const queryString = queryParam.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    let orderSummay = null;
    // console.log("Render - Current State: ", this.state);
    let burger = this.state.errorLoading ? (
      <p> Error loading the ingredients </p>
    ) : (
      <Spinner />
    );
    console.log("Render", burger);

    if (this.state.loading) {
      orderSummay = <Spinner />;
    }

    let disabledInfo = null;
    if (this.state.ingredients) {
      disabledInfo = { ...this.state.ingredients };
      // console.log("disabledInfo", disabledInfo);
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      burger = (
        <Aux>
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
      orderSummay = (
        <OrderSummary
          ingredients={this.state.ingredients}
          clickContinue={this.purchaseContinueHandler}
          clickCancel={this.purchaseCancelHandler}
          price={this.state.totalPrice}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummay}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
