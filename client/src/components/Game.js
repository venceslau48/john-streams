import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background-color: var(--navbar-bg);
`

const StyledLink = styled(Link)`
    transition: all 0.2s;
    box-shadow: var(--shadow-light);
    text-decoration: none;
    color: var(--color-typo);
    border-radius: 3px;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-dark);
    }
`

const Poster = styled.img`
    border-radius: 3px 3px 0 0;
    width: 100%;
`

const Info = styled.div`
    padding: 1rem;
    border-radius: 0 0 3px 3px;
    text-align: left;
`

const Name = styled.h3`
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Viewers = styled.span`
    font-size: 1.4rem;
`

const Game = ({ game, topGames, searchedGames, streams }) => {
    return (
        <Container>
            {topGames && (
                <StyledLink to={`/streams/${game.game.name}`}>
                    <Poster src={game.game.box.large} />
                    <Info>
                        <Name>{game.game.name}</Name>
                        <Viewers>{game.viewers} viewers</Viewers>
                    </Info>
                </StyledLink>
            )}
            {searchedGames && (
                <StyledLink to={`/streams/${game.name}`}>
                    <Poster src={game.box.large} />
                    <Info>
                        <Name>{game.name}</Name>
                        {/* <Viewers>{game.viewers} viewers</Viewers> */}
                    </Info>
                </StyledLink>
            )}
            {streams && (
                <StyledLink to={`/channel/${game.channel._id}`}>
                    <Poster src={game.preview.large} />
                    <Info>
                        <Name>{game.channel.display_name}</Name>
                        <Viewers>{game.viewers} viewers</Viewers>
                    </Info>
                </StyledLink>
            )}
        </Container>
    )
}

export default Game
