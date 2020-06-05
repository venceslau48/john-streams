import React from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Home from "./pages/Home"
import Game from "./pages/Game"
import Stream from "./pages/Stream"
import Search from "./pages/Search"

const Container = styled.div`
    background: var(--color-bg);
    padding: 4rem;
`

const App = () => {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/stream" component={Stream} />
                <Route path="/search/:game" component={Search} />
            </Switch>
        </Container>
    )
}

export default App
