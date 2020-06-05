import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"

const Home = () => {
    const [games, setGames] = useState({ top: [] })

    useEffect(() => {
        axios.get("/streams").then(res => {
            setGames({ top: res.data.top })
            console.log(res.data)
        })
    }, [])

    return (
        <div>
            {games.top.map(game => (
                <Card game={game} key={game.game._id} />
            ))}
        </div>
    )
}

export default Home
