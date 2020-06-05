import React from "react"
import styled from "styled-components"

const Form = styled.form``

const Input = styled.input`
    padding: 0.8rem 1rem;
    font-size: 1.7rem;
    width: 50rem;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid #bbb;
    background: transparent;
    color: #212121;

    &:visited,
    &:focus {
        outline: none;
    }
`

const Searchbar = ({ onSubmit, value, onChange }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" value={value} onChange={onChange} placeholder="Search games" />
        </Form>
    )
}

export default Searchbar
