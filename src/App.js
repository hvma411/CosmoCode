import React from "react";
import ReactDOM from "react-dom";

import "./main.scss"
import HomeComponent from "./components/HomeComponent/HomeComponent";

const App = () => {
    return (
        <>
            <HomeComponent />
        </>
    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)