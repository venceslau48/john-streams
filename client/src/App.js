import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Navigation from "./components/Navbar"
import Home from "./pages/Home"
import Streams from "./pages/Streams"
import Player from "./pages/Player"
import Search from "./pages/Search"
import image from "./images/wave.svg"

const Container = styled.div`
    margin: 6rem 0;
    display: grid;
    grid-template-columns:
        [full-start] minmax(6rem, 1fr)
        [center-start] repeat(6, [col-start] minmax(min-content, 19rem) [col-end]) [center-end]
        minmax(6rem, 1fr) [full-end];

    /* &:before {
        content: "";
        position: absolute;
        background-image: url(${image});
        background-size: cover;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transform: rotate(180deg);
    } */
`

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/streams/:game" component={Streams} />
                    <Route path="/:channel" exact component={Player} />
                    <Route path="/search/:game" component={Search} />
                </Switch>
            </Container>
        </Fragment>
    )
}

export default App
