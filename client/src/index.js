import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "./utils/theme"
import GlobalStyle from "./utils/globals"

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Fragment>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <GlobalStyle />
        </Fragment>
    </ThemeProvider>,
    document.getElementById("root")
)
