import React from "react"
import styled from "styled-components"
import Searchbar from "../components/Searchbar"

const Container = styled.div`
    grid-column: center-start/center-end;
    z-index: 10;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 6rem;
`

const Titulo = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0.3;
    /* color: var(--color-typo); */
    color: #fff;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.width && `repeat(auto-fill, minmax(${props.width}, 1fr))`};
    gap: 2.5rem;
`

const Layout = props => {
    return (
        <Container>
            <FlexContainer>
                <Titulo>{props.titulo}</Titulo>
                <Searchbar
                    onSubmit={props.onSubmit}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            </FlexContainer>
            {props.searchPage ? props.children : <Grid width={props.width}>{props.children}</Grid>}
        </Container>
    )
}

export default Layout
