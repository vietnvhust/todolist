import { combineReducers } from "redux";
import todos from './todos';
import toogle from "./toogle";

const myReducer = combineReducers({
  todos,
  toogle,
});

export default myReducer;
