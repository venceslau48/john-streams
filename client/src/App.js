import React from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Home from "./pages/Home"
import Streams from "./pages/Streams"
import Player from "./pages/Player"
import Search from "./pages/Search"

const Container = styled.div`
    padding: 4rem;
`

const App = () => {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/streams/:game" component={Streams} />
                <Route path="/:channel" component={Player} />
                <Route path="/search/:game" component={Search} />
            </Switch>
        </Container>
    )
}

export default App
