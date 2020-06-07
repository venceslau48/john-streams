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
import image from "./images/wave.svg"

const Container = styled.div`
    display: grid;
    grid-template-columns:
        [full-start] minmax(6rem, 1fr)
        [center-start] repeat(6, [col-start] minmax(min-content, 19rem) [col-end]) [center-end]
        minmax(6rem, 1fr) [full-end];

    &:before {
        content: "";
        position: absolute;
        background-image: url(${image});
        background-size: cover;
        filter: contrast(70%);
        top: 0;
        right: 0;
        width: 100%;
        height: 70%;
        transform: rotate(180deg);
    }
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
                    <Route path="/streams/:game" component={Streams} />
                    <Route path="/:channel" exact component={Player} />
                    <Route path="/search/games/:game" component={SearchGames} />
                    <Route path="/search/streams/:stream" component={SearchStreams} />
                </Switch>
            </Container>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
