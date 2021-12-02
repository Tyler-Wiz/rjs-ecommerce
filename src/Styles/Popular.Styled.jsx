import styled from 'styled-components'

export const Container = styled.section`
    width: 90%;
    padding: 1rem;
    margin: 3rem auto;
    position: relative;
    
    h3{
        text-align: center;
        margin: 4rem;
        font-size:2rem;
    }
`
export const Wrapper = styled.ul`
    width: 90%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    
`

export const ImageContainer = styled.div`
    width:9rem;
    padding: 1rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`