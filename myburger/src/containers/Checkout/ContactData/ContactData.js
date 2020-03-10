import React, { Component } from "react";
import Button from "../../../components/Utilities/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/Utilities/Spinner/Spinner";
import Input from "../../../components/Utilities/Input/Input";

class ContactData extends Component {
  state = {
    formElements: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        validation: {
          required: true,
          maxLength: 15
        },
        value: "",
        inValid: false
      },
      emailId: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email ID"
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 40
        },
        value: "",
        inValid: false
      },
      streetAddress: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Address"
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 20
        },
        value: "",
        inValid: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City"
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 20
        },
        value: "",
        inValid: false
      },
      state: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "State"
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 15
        },
        value: "",
        inValid: false
      },
      postalCdoe: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code"
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        value: "",
        inValid: false
      },
      deliverytype: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "",
        inValid: false
      }
    },
    loading: false,
    invalid: true
  };

  orderHandler = () => {
    // console.log(this.props);
    this.setState({ purchasing: false });

    const customerData = {};
    for (let key in this.state.formElements) {
      // console.log(this.state);
      customerData[key] = this.state.formElements[key].value;
    }

    const orderSummary = {
      ingredient: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: customerData
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", orderSummary)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  checkElementValidity = (value, validation) => {
    let inValid = false;
    if (!validation) {
      return inValid;
    }
    if (validation.required) {
      inValid = value.trim() === "";
      // console.log("inValid ", inValid);
    }

    if (validation.minLength && !inValid) {
      inValid = value.length <= validation.minLength;
      // console.log("inValid ", inValid);
    }
    if (validation.minLength && !inValid) {
      inValid = value.length > validation.maxLenght;
      // console.log("inValid ", inValid);
    }

    return inValid;
  };

  inputHandler = (event, id) => {
    const updatedFormElements = { ...this.state.formElements };
    const updatedFormElement = { ...updatedFormElements[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.inValid = this.checkElementValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    console.log("updatedFormElement: ", updatedFormElement);

    updatedFormElements[id] = updatedFormElement;
    this.setState({
      formElements: updatedFormElements,
      inValid: updatedFormElement.inValid
    });
  };

  render() {
    const formElements = [];
    for (let key in this.state.formElements) {
      formElements.push({
        id: key,
        config: this.state.formElements[key]
      });
    }

    console.log("State : ", this.state);
    const formPresent = formElements.map(element => {
      console.log("element.config.inValid", element.config.inValid);
      return (
        <Input
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.elementConfig.value}
          changed={event => this.inputHandler(event, element.id)}
          invalid={element.config.inValid}
          shouldValidate={element.config.validation}
        />
      );
    });

    return (
      <div className={classes.ContactData}>
        {this.state.loading ? <Spinner /> : null}
        <h1> Enter you Contact information</h1>
        {formPresent}
        <Button
          buttonType="Success"
          clicked={this.orderHandler}
          disabled={this.state.inValid}
        >
          ORDER
        </Button>
      </div>
    );
  }
}

export default ContactData;
