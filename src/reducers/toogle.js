import * as types from "./../constants/ActionTypes";

const initialState = false;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      console.log(initialState);
      return !state;
    default:
      return state;
  }
};

export default myReducer;
