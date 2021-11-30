import styled from 'styled-components'

export const Container = styled.section`
    width: 95%;
    text-transform: capitalize;
    padding: 1rem;
    position: relative;
    margin: 0 auto;

    h3{
        text-align:center;
        font-size: 2rem;
        margin: 5rem 0;
    }

`
export const Wrapper =  styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin: 0 auto;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 80%;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  p{
      margin: .3rem;
      font-size: 1.1rem;
      font-weight:600;
  }
`

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    margin: .6rem;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    
`



export const ProductIcons = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem;
    cursor: pointer;

`

export const ColorWrapper = styled.div`
    display: flex;
`

export const Color = styled.div`
    background-color: ${props => props.bg};
    width: 1.3rem;
    height: 1.3rem;
    margin: .2rem;
    border-radius: 50%;
`

export const ExpandImage = styled.div`
    position: absolute;
    top: 25%;
    bottom: 0;
    right:0;
    margin: auto;
    z-index: 9999999;

    img{
        width: 400px;
        height: 500px;
        object-fit: cover;

    }

`