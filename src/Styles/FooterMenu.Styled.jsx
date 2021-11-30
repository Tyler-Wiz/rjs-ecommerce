import styled from "styled-components"


export const Container = styled.section`
    padding: 1rem;
`

export const Wrapper = styled.ul`
    list-style: none;

    li{
        padding: 1rem;
    }

    h3{
        font-size:1.5rem;
        text-transform:uppercase;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DropContainer = styled.div`
      padding: 1rem;
    p{
        font-size:1.3rem;
        text-transform: capitalize;
        font-weight:300;
        padding: .2rem;
    }
`

export const PaymentContainer =styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const IconSpan = styled.span`
    margin-right: .5rem;
    color: ${props => props.bg};
`