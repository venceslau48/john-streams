import React from "react"
import styled from "styled-components"

const Form = styled.form``

const Input = styled.input`
    padding: 0.8rem 1rem;
    font-size: 1.7rem;
    width: 50rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-typo-dark);
    background: transparent;
    color: var(--color-typo);

    &::placeholder {
        color: var(--color-typo-light);
    }

    &:visited,
    &:focus {
        outline: none;
    }
`

const Searchbar = ({ onSubmit, value, onChange, placeholder }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
        </Form>
    )
}

export default Searchbar
