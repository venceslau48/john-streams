import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"
import Searchbar from "../components/Searchbar"

const Container = styled.div``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
`

const Home = () => {
    const [games, setGames] = useState({ top: [] })
    const [search, setSearch] = useState("")
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/games").then(res => {
            setGames({ top: res.data.top })
        })
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to={`/search/${search}`} />
    }

    return (
        <Container>
            <Searchbar onSubmit={onSubmit} value={search} onChange={e => setSearch(e.target.value)} />
            <Grid>
                {games.top.map(game => (
                    <Game game={game} key={game.game._id} topGames />
                ))}
            </Grid>
        </Container>
    )
}

export default Home
