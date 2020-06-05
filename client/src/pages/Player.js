import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Loader from "../components/Loader"

const Container = styled.div`
    grid-column: center-start/center-end;
    z-index: 10;
`

const StyledPlayer = styled.div`
    width: 100%;
    height: 80vh;
`

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
                <StyledPlayer>
                    <iframe
                        src={`https://player.twitch.tv/?channel=${stream.stream.channel.display_name}`}
                        height="100%"
                        width="100%"
                        frameborder
                        scrolling
                        allowfullscreen
                    ></iframe>
                </StyledPlayer>
            )}
        </Container>
    )
}

export default Player
