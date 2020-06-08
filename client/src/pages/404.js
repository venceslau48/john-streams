import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div``

const Mensagem = styled.p``

const NotFound = () => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setRedirect(true)
    }, [])

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Mensagem>Redirecting ...</Mensagem>
        </Container>
    )
}

export default NotFound
