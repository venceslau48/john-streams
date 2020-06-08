import React, { useState, useEffect } from "react"
import history from "../history"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"
import Loader from "../components/Loader"
import Layout from "../components/Layout"

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2.5rem;
`

const SearchGames = props => {
    const [searchedGames, setSearchedGames] = useState({ games: [] })
    const [search, setSearch] = useState(props.match.params.game)
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/search/games", { params: { search } }).then(res => {
            setLoading(false)
            setSearchedGames({ games: res.data.games })
        })
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        if (search !== "") {
            axios.get("/search/games", { params: { search } }).then(res => {
                setLoading(false)
                setSearchedGames({ games: res.data.games })
            })
        } else {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <Layout
            titulo={`Searched for ${props.match.params.game}`}
            onSubmit={onSubmit}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search games"
            goBack={true}
            onClickGoBack={history.goBack}
        >
            {loading === true || searchedGames.games === undefined || searchedGames.games === null ? (
                <Loader />
            ) : searchedGames.games.length > 0 ? (
                <Grid>
                    {searchedGames.games.map(game => (
                        <Game game={game} key={game._id} searchedGames />
                    ))}
                </Grid>
            ) : (
                <p>Game not found</p>
            )}
        </Layout>
    )
}

export default SearchGames
