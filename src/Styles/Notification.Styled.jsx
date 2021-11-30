import styled from "styled-components"


export const Container = styled.section`
    padding: 1rem;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 4rem auto;

    h3{
        margin-bottom:1rem;
        font-size:1.1rem;
        text-transform:uppercase;
        text-align: center;
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Form = styled.form`
    flex:2;
 
    input {
        width: 60%;
        outline:none;
        padding: .7rem 1rem;
        border: none;
    }

    button {
        padding: .7rem 2rem;
        border: none;
        background-color: #e6db4a;
        margin-left:.6rem;
        font-size: 1.1rem;
        text-transform:uppercase;
        font-weight:600;
    }
`

export const Social = styled.div`
    span{
        margin-right: .5rem;
        cursor: pointer;
    }
`