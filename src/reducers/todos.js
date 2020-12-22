import * as types from "./../constants/ActionTypes";

const initialState = (localStorage.getItem("getList")
  ? JSON.parse(localStorage.getItem("getList"))
  : []);

const myReducer = (state=initialState, action) => {
    switch (action.type) {
      case types.LIST_ALL:
        return state;
      default:
        return state;
    }
}

export default myReducer;