import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import "./main.scss"
import store from './redux/store.js';
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AboutComponent from "./components/AboutComponent/AboutComponent.js";
import PortfolioComponent from "./components/PortfolioComponent/PortfolioComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SocialMediaBar from "./components/SocialMediaBar/SocialMediaBar";
const App = () => {

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    }

    useEffect(() => {
        window.addEventListener('resize', appHeight);
        appHeight()
    }, [])

    return (
        <Provider store={store}>
            <main className="container">
                <BrowserRouter>
                    <MenuComponent />
                    <div className="content-container">
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={450}
                                    classNames="fade"
                                >
                                    <Switch location={location}>
                                        <Route exact path="/" component={HomeComponent} />
                                        <Route path="/about" component={AboutComponent} />
                                        <Route path="/portfolio" component={PortfolioComponent} />
                                        <Route path="/contact" component={ContactComponent} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                </BrowserRouter>
                <SocialMediaBar />
            </main>
        </Provider>


    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)