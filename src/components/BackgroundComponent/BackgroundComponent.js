import React from "react";

const BackgroundComponent = () => {
    return (
        <div className="planets-system router-transition">
            <Planet planet="main-planet" />
            <div className="orbit-wrapper">
                <div className="orbit1">
                    <Planet planet="first-planet" />
                </div>
                <div className="orbit1 orbit1-cover">
                    <div className="partial-orbit1"></div>
                </div>
                <div className="orbit1 orbit1-planet-cover">
                    <Planet planet="first-planet" />
                </div>
            </div>
        </div>
    )
}

const Planet = ({ planet }) => {
    return (
        <div className={ planet }>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
            <div className="circle border"></div>
        </div>
    )
}

export default BackgroundComponent;