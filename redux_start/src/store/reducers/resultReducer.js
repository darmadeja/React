import * as actionTypes from "../actions";

const initialState = { results: [] };

const resultReducer = (state = initialState, action) => {
  console.log("state: ", state, "action: ", action);
  if (action.type === actionTypes.STORE_STATE) {
    return {
      ...state,
      results: state.results.concat({ value: action.counter, id: new Date() })
    };
  }
  if (action.type === actionTypes.SELECT_LIST) {
    console.log("Store result");
    const newArray = state.results.filter(result => result.id !== action.id);
    return {
      ...state,
      results: newArray
    };
  }
  return state;
};

export default resultReducer;
