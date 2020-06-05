import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Poster = styled.img`
    border-radius: 3px;
    width: 100%;
`

const Name = styled.h3`
    font-size: 1.4rem;
    margin: 1rem 0 0;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Viewers = styled.span`
    font-size: 1.4rem;
`

const Card = ({ game, topGames, searchedGames }) => {
    return (
        <Container>
            {topGames && (
                <>
                    <Poster src={game.game.box.large} />
                    <Name>{game.game.name}</Name>
                    <Viewers>{game.viewers} viewers</Viewers>
                </>
            )}
            {searchedGames && (
                <>
                    <Poster src={game.box.large} />
                    <Name>{game.name}</Name>
                    <Viewers>{game.viewers} viewers</Viewers>
                </>
            )}
        </Container>
    )
}

export default Card
