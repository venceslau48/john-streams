import React from "react"
import styled from "styled-components"

const Form = styled.form``

const Input = styled.input`
    padding: 0.8rem 1rem;
    font-size: 1.7rem;
    width: 50rem;
    border-radius: 0;
    border: none;
    /* border-bottom: 2px solid #bbb; */
    border-bottom: 2px solid #ddd;
    background: transparent;
    /* color: #212121; */
    color: #eee;

    &::placeholder {
        color: #ddd;
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
