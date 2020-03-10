import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0,
    results: []
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementHandler}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementHandler}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddHandler} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractHandler}
        />
        <hr />
        <button onClick={() => this.props.onShowState(this.props.ctr)}>
          Show store data
        </button>
        <ul>
          {console.log("storedResults", this.props.storedResults)}
          {this.props.storedResults &&
            this.props.storedResults.map(storedResult => {
              console.log(storedResult);
              return (
                <li
                  key={storedResult.id}
                  onClick={() => this.props.onListSelect(storedResult.id)}
                >
                  {storedResult.value}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps: Incrementing", state);
  return {
    ctr: state.counter.counter,
    storedResults: state.result.results
  };
};

const mapDispatchToProps = (dispatch, state) => {
  console.log("mapDispatchToProps: Incrementing", state);
  return {
    onIncrementHandler: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementHandler: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddHandler: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubstractHandler: () =>
      dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
    onShowState: counter =>
      dispatch({ type: actionTypes.STORE_STATE, counter: counter }),
    onListSelect: id => dispatch({ type: actionTypes.SELECT_LIST, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
