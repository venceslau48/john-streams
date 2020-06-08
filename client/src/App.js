import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./utils/theme"
import GlobalStyle from "./utils/globals"

import Navigation from "./components/Navbar"
import Home from "./pages/Home"
import Streams from "./pages/Streams"
import Player from "./pages/Player"
import SearchGames from "./pages/SearchGames"
import SearchStreams from "./pages/SearchStreams"
import NotFound from "./pages/404"

const Container = styled.div`
    display: grid;
    grid-template-columns:
        [full-start] minmax(6rem, 1fr)
        [center-start] repeat(6, [col-start] minmax(min-content, 19rem) [col-end]) [center-end]
        minmax(6rem, 1fr) [full-end];
`

const App = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Container>
                <Navigation onChange={toggleTheme} checked={theme === "dark" ? true : false} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/streams/:game" exact component={Streams} />
                    <Route path="/channel/:channel" exact component={Player} />
                    <Route path="/search/games/:game" exact component={SearchGames} />
                    <Route path="/search/streams/:stream" exact component={SearchStreams} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
