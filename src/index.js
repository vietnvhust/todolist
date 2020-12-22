import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import myReducer from "./reducers/index";

import App from "./App";

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);