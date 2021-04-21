import React from "react";
import BackgroundComponent from "../BackgroundComponent/BackgroundComponent";
import MenuComponent from "../MenuComponent/MenuComponent";
import HomeContent from "./HomeContent/HomeContent";

const HomeComponent = () => {
    return (
        <div>
            <HomeContent />
            <BackgroundComponent />
        </div>
    )
}

export default HomeComponent;