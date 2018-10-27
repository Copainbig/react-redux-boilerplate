import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import App from "./components/app/App";

const store = configureStore();

const renderApp = (store) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , wrapper)
}

const wrapper = document.getElementById("container");
wrapper ? renderApp(store) : false;