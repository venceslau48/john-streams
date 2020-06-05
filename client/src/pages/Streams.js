import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"

const Container = styled.div``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
`

const Streams = props => {
    const [games, setGames] = useState({ streams: [] })

    useEffect(() => {
        axios.get("/streams", { params: { game: props.match.params.game } }).then(res => {
            setGames({ streams: res.data.streams })
            console.log(res.data)
        })
    }, [])

    return (
        <Container>
            <Grid>
                {games.streams.map(game => (
                    <Game game={game} key={game.game._id} streams />
                ))}
            </Grid>
        </Container>
    )
}

export default Streams
