import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 2s infinite linear;

    @media (max-width: 56.25em) {
        left: 40%;
    }
`

const Circle1 = styled.div`
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: var(--color-primary);
    border-radius: 100%;
    animation: bounce 2s infinite ease-in-out;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes bounce {
        0%,
        100% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
    }
`

const Circle2 = styled(Circle1)`
    top: auto;
    bottom: 0;
    animation-delay: -1s;
`

const Loader = () => {
    return (
        <Container>
            <Circle1 />
            <Circle2 />
        </Container>
    )
}

export default Loader
