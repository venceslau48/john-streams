import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Game from "../components/Game"
import Layout from "../components/Layout"

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
        return <Redirect to={`/search/games/${search}`} />
    }

    return (
        <Layout
            titulo="Top 100 games"
            onSubmit={onSubmit}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search games"
            width="17rem"
        >
            {games.top.map(game => (
                <Game game={game} key={game.game._id} topGames />
            ))}
        </Layout>
    )
}

export default Home
