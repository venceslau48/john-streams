import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Loader from "../components/Loader"

const Container = styled.div``

const Player = props => {
    const [stream, setSream] = useState({ stream: {} })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get("/streams/channel", {
                params: { channel: props.match.params.channel }
            })
            .then(res => {
                setLoading(false)
                setSream({ stream: res.data.stream })
            })
    }, [])

    return (
        <Container>
            {loading === true || stream.stream.channel === undefined || stream.stream === null ? (
                <Loader />
            ) : (
                <iframe
                    src={`https://player.twitch.tv/?channel=${stream.stream.channel.display_name}`}
                    height="400"
                    width="600"
                    frameborder
                    scrolling
                    allowfullscreen
                ></iframe>
            )}
        </Container>
    )
}

export default Player
