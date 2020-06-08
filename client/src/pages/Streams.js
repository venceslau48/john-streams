import React, { useState, useEffect } from "react"
import history from "../history"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Game from "../components/Game"
import Layout from "../components/Layout"
import Loader from "../components/Loader"

const Streams = props => {
    const [games, setGames] = useState({ streams: [] })
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        axios.get("/streams", { params: { game: props.match.params.game } }).then(res => {
            setLoading(false)
            setGames({ streams: res.data.streams })
        })
    }, [])

    const onSubmit = e => {
        e.preventDefault()

        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to={`/search/streams/${search}`} />
    }

    return (
        <Layout
            titulo="Top 50 streams"
            onSubmit={onSubmit}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search streams"
            width="30rem"
            grid={true}
            goBack={true}
            onClickGoBack={history.goBack}
            tituloGame={props.match.params.game}
            footer={!loading}
        >
            {loading ? <Loader /> : games.streams.map(game => <Game game={game} key={game.game._id} streams />)}
        </Layout>
    )
}

export default Streams
