import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./main.scss"
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import BackgroundComponent from "./components/BackgroundComponent/BackgroundComponent";
import FooterButHeaderComponent from "./components/FooterButHeaderComponent/FooterButHeaderComponent";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AboutComponent from "./components/AboutComponent/AboutComponent";
const App = () => {

    useEffect(() => {
        console.log('ah')
    })

    return (
        <main className="container">
            <BrowserRouter>
                <MenuComponent />
                <div className="content-container">
                    <Route render={({ location }) => (
                        // <TransitionGroup>
                        //     <CSSTransition
                        //         key={ location.key }
                        //         timeout={ 450 }
                        //         classNames="fade"
                        //     >
                                <Switch location={ location }>
                                    <Route exact path="/" component={ HomeComponent } />
                                    <Route path="/about" component={ AboutComponent } />
                                </Switch>
                        //     </CSSTransition>
                        // </TransitionGroup>
                    )} />
                </div>
            </BrowserRouter>
            <FooterButHeaderComponent />
        </main>
    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)