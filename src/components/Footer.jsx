import styled from "styled-components"

const Container = styled.footer`
     margin: 2rem auto;
     position: relative;
     
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    

    &::before{
        content: '';
        height: .2rem;
        width: 98%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: auto;
        background-color: #0c0b0b; 
    }

    p{
      font-size:1.2rem;
      font-weight:600;
      margin-top:1rem;
    }
`

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <p>&copy; 2021</p>           
                <p>All Rights Reserved</p>
                <p>Tyler Dev</p>
            </Wrapper>
        </Container>
    )
}
