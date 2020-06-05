import React from "react"
import styled from "styled-components"

const Form = styled.form`
    margin-bottom: 4rem;
`

const Input = styled.input`
    padding: 0.8rem 1rem;
    font-size: 1.6rem;
    width: 40rem;
    border-radius: 3px;
    border: none;
    box-shadow: var(--shadow-light);

    &:visited,
    &:focus {
        outline: none;
    }
`

const Searchbar = ({ onSubmit, value, onChange }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" value={value} onChange={onChange} />
        </Form>
    )
}

export default Searchbar
