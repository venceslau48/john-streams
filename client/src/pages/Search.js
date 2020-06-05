import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"
import Searchbar from "../components/Searchbar"
import Loader from "../components/Loader"

const Container = styled.div``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
`

const Search = props => {
    const [searchedGames, setSearchedGames] = useState({ games: [] })
    const [search, setSearch] = useState(props.match.params.game)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/search", { params: { search } }).then(res => {
            setLoading(false)
            setSearchedGames({ games: res.data.games })
        })
        // }, [searchedGames])
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        axios.get("/search", { params: { search } }).then(res => {
            setLoading(false)
            setSearchedGames({ games: res.data.games })
        })
    }

    return (
        <Container>
            <Searchbar onSubmit={onSubmit} value={search} onChange={e => setSearch(e.target.value)} />
            {loading === true || searchedGames.games === undefined || searchedGames.games === null ? (
                <Loader />
            ) : (
                <Grid>
                    {searchedGames.games.map(game => (
                        <Game game={game} key={game._id} searchedGames />
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default Search
