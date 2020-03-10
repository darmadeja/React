import React, { Component } from "react";
import Modal from "../../components/Utilities/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    constructor(props) {
      super(props);
      this.requestInteceptor = axios.interceptors.request.use(
        request => {
          this.setState({ error: null });
          return request;
        },
        error => {
          this.setState({ error: error });
        }
      );
      this.responseInteceptor = axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInteceptor);
      axios.interceptors.response.eject(this.responseInteceptor);
    }

    errorConfirmHandler = () => {
      //   console.log("errorConfirmHandler");
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
