const initialState = {
  orders: [],
  loading: true,
  errorLoading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type) {
    console.log(state);
  }
  return state;
};

export default reducer;
