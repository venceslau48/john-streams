import React from "react"
import styled from "styled-components"

const Form = styled.form`
    margin-bottom: 4rem;
`

const Input = styled.input``

const Searchbar = ({ onSubmit, value, onChange }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" value={value} onChange={onChange} />
        </Form>
    )
}

export default Searchbar
