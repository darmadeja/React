import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    errorLoading: false
  };

  componentWillMount() {
    axios
      .get("/orders.json")
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        this.setState({
          orders: fetchedOrders,
          loading: false
        });
      })
      .catch(error => this.setState({ errorLoading: true, loading: false }));
  }

  render() {
    // console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.key}
            ingredients={order.ingredient}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
