import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/index";
import App from "./App";
import style from "./styles/main.css"

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(<
    Provider store={store}>
        <App />
    </Provider>
, document.getElementById("app"));