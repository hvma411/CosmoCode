import React from "react";
import BackgroundComponent from "../BackgroundComponent/BackgroundComponent";
import MenuComponent from "../MenuComponent/MenuComponent";

const HomeComponent = () => {
    return (
        <section className="container">
            <MenuComponent />
            <BackgroundComponent />
        </section>
    )
}

export default HomeComponent;