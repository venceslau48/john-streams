import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Game from "../components/Game"
import Searchbar from "../components/Searchbar"
import Loader from "../components/Loader"

const Container = styled.div`
    grid-column: center-start/center-end;
    z-index: 10;
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 2rem;
`

const Search = props => {
    const [searchedGames, setSearchedGames] = useState({ games: [] })
    const [search, setSearch] = useState(props.match.params.game)
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/search", { params: { search } }).then(res => {
            setLoading(false)
            setSearchedGames({ games: res.data.games })
            console.log("ao entrar", res.data)
        })
        // }, [searchedGames])
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        if (search !== "") {
            axios.get("/search", { params: { search } }).then(res => {
                setLoading(false)
                setSearchedGames({ games: res.data.games })
                console.log("ao clicar", res.data)
            })
        } else {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <FlexContainer>
                <Titulo>Searched for {props.match.params.game}</Titulo>
                <Searchbar onSubmit={onSubmit} value={search} onChange={e => setSearch(e.target.value)} />
            </FlexContainer>
            {loading === true || searchedGames.games === undefined || searchedGames.games === null ? (
                <Loader />
            ) : searchedGames.games.length > 0 ? (
                <Grid>
                    {searchedGames.games.map(game => (
                        <Game game={game} key={game._id} searchedGames />
                    ))}
                </Grid>
            ) : (
                <p>Não existem streams</p>
            )}
        </Container>
    )
}

export default Search
