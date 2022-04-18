import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


window.onload = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Switch>
                    <App />
                </Switch>
            </Router>
        </React.StrictMode>,
        document.getElementById("root")
    );
};