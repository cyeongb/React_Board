import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./module/rootReducer";

// store 생성
const store = createStore(rootReducer);

ReactDOM.render(
  //store를 만들고 Provider로 하위 컴포넌트 App에게 사용할 수 있도록 함
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
