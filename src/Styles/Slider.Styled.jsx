import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 40vh;
    max-width: 100vw;
    display: flex;
    overflow: hidden;
`
export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    right:${props => props.direction === 'right' && '1.5rem'};
    left: ${props => props.direction === 'left' && '1.5rem'};
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
    opacity: .5;
    z-index: 1;
 
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    transition:all 1s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
export const Slide = styled.div`
   width: 100vw;
   height: 40vh;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg};
   padding:3rem;
`
export const ImgContainer = styled.div`
    width: 30%;
`
export const InfoContainer = styled.div`
    width: 70%;
    margin-left:5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    text-transform: capitalize;
    
  
    h3{
        font-size:clamp(2.5rem, 2.5vw, 3rem);
        text-transform: uppercase;
        margin-bottom:1rem;
    }

    p{
        font-size:clamp(1.2rem, 2.5vw, 2rem);
        margin-bottom:1rem;
    }
    
    button{
        padding: 1rem 2rem;
        border: none;
        color: white;
        font-size:clamp(1rem, 2.5vw, 2rem);
        background-color: black;
        text-transform: uppercase;
        cursor: pointer;
    }
`

export const Image = styled.img`
    width: 200%;
    height: 100%;
    object-fit: cover;
    margin-left: -5rem;
`