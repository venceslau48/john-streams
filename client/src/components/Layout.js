import React from "react"
import styled, { css } from "styled-components"
import Searchbar from "./Searchbar"
import Footer from "./Footer"

const Container = styled.div`
    grid-column: center-start/center-end;
    z-index: 10;
    text-align: right;
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 6rem;

    @media (max-width: 37.5em) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const FlexContainer2 = styled(FlexContainer)`
    @media (max-width: 37.5em) {
        flex-direction: row;
        align-items: center;
    }
`

const Titulo = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0.3;
    color: var(--color-typo);

    @media (max-width: 56.25em) {
        font-size: 2.6rem;
    }
`

const GameTitle = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    transform: translateY(-4rem);
    color: var(--color-primary);

    @media (max-width: 37.5em) {
        transform: translateY(-1rem);
        margin-bottom: 3rem;
    }
`

const GoBack = styled.button`
    font-size: 1.5rem;
    color: #fff;
    background-color: var(--color-primary);
    padding: 0.8rem 1.7rem;
    border-radius: 3px;
    text-decoration: none;
    border: none;
    outline: none;
    box-shadow: var(--shadow-light);
    transition: all 0.4s;

    ${({ marginBottom }) =>
        marginBottom &&
        css`
            margin-bottom: 2.5rem;
            display: inline-block;
        `}

    &:hover {
        color: #fff;
        opacity: 0.8;
        box-shadow: var(--shadow-dark);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.width && `repeat(auto-fit, minmax(${props.width}, 1fr))`};
    gap: 2.5rem;
    margin-bottom: 6rem;
`

const Layout = props => {
    return (
        <Container>
            {props.goBack && (
                <GoBack marginBottom onClick={props.onClickGoBack}>
                    Go Back
                </GoBack>
            )}
            {props.noSearch ? (
                <FlexContainer2>
                    <Titulo>{props.titulo}</Titulo>
                    <GoBack onClick={props.onClickGoBack}>Go Back</GoBack>
                </FlexContainer2>
            ) : (
                <FlexContainer>
                    <Titulo>{props.titulo}</Titulo>
                    <Searchbar
                        onSubmit={props.onSubmit}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                </FlexContainer>
            )}

            {props.tituloGame && <GameTitle>{props.tituloGame}</GameTitle>}
            {!props.grid ? props.children : <Grid width={props.width}>{props.children}</Grid>}
            {props.footer && <Footer />}
        </Container>
    )
}

export default Layout
