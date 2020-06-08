import React from "react"
import styled, { css } from "styled-components"
import Searchbar from "../components/Searchbar"

const Container = styled.div`
    grid-column: center-start/center-end;
    z-index: 10;
    margin-bottom: 6rem;
    text-align: right;
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
    color: var(--color-typo);
`

const GameTitle = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    transform: translateY(-4rem);
    color: var(--color-primary);
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
`

const Layout = props => {
    return (
        <Container>
            {props.goBack && (
                <GoBack marginBottom onClick={props.onClickGoBack}>
                    Go Back
                </GoBack>
            )}
            <FlexContainer>
                <Titulo>{props.titulo}</Titulo>
                {props.noSearch ? (
                    <GoBack onClick={props.onClickGoBack}>Go Back</GoBack>
                ) : (
                    <Searchbar
                        onSubmit={props.onSubmit}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                )}
            </FlexContainer>
            {props.tituloGame && <GameTitle>{props.tituloGame}</GameTitle>}
            {!props.grid ? props.children : <Grid width={props.width}>{props.children}</Grid>}
        </Container>
    )
}

export default Layout
