import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-color: var(--color-bg);
    text-align: center;
    width: 100%;
    padding-bottom: 2rem;
`

const Text = styled.p`
    color: var(--color-typo);
    font-size: 1.6rem;
`

const Footer = () => {
    return (
        <Container>
            <Text>Application made with TWITCH API</Text>
        </Container>
    )
}

export default Footer
