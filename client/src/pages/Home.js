import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Game from "../components/Game"
import Layout from "../components/Layout"
import Loader from "../components/Loader"

const Home = () => {
    const [games, setGames] = useState({ top: [] })
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/games").then(res => {
            setLoading(false)
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
            grid={true}
            footer={!loading}
        >
            {loading ? <Loader /> : games.top.map(game => <Game game={game} key={game.game._id} topGames />)}
        </Layout>
    )
}

export default Home
