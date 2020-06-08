import React, { useState, useEffect } from "react"
import history from "../history"
import axios from "axios"
import styled from "styled-components"
import Loader from "../components/Loader"
import Layout from "../components/Layout"

const StyledPlayer = styled.div`
    width: 100%;
    height: 80vh;
    margin-bottom: 6rem;
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
        <Layout
            titulo={
                stream.stream.channel === undefined || stream.stream.channel === null
                    ? ""
                    : stream.stream.channel.display_name
            }
            noSearch={true}
            onClickGoBack={history.goBack}
            tituloGame={stream.stream.game === undefined ? "" : `Playing ${stream.stream.game}`}
            footer={!loading}
        >
            {loading === true || stream.stream.channel === undefined || stream.stream === null ? (
                <Loader />
            ) : (
                <StyledPlayer>
                    <iframe
                        src={`https://player.twitch.tv/?channel=${stream.stream.channel.display_name}`}
                        height="100%"
                        width="100%"
                        frameBorder="0"
                    ></iframe>
                </StyledPlayer>
            )}
        </Layout>
    )
}

export default Player
