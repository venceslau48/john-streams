import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"
import Loader from "../components/Loader"
import Layout from "../components/Layout"

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 2rem;
`

const SearchGames = props => {
    const [searchedGames, setSearchedGames] = useState({ streams: [] })
    const [search, setSearch] = useState(props.match.params.stream)
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/search/streams", { params: { search } }).then(res => {
            setLoading(false)
            setSearchedGames({ streams: res.data.streams })
        })
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        if (search !== "") {
            axios.get("/search/streams", { params: { search } }).then(res => {
                setLoading(false)
                setSearchedGames({ streams: res.data.streams })
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
            titulo={`Searched for ${props.match.params.stream}`}
            onSubmit={onSubmit}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search streams"
            searchPage={true}
        >
            {loading === true || searchedGames.streams === undefined || searchedGames.streams === null ? (
                <Loader />
            ) : searchedGames.streams.length > 0 ? (
                <Grid>
                    {searchedGames.streams.map(game => (
                        <Game game={game} key={game._id} streams />
                    ))}
                </Grid>
            ) : (
                <p>Stream not found</p>
            )}
        </Layout>
    )
}

export default SearchGames
