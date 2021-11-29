import styled from "styled-components"

export const Container = styled.nav`
    position: fixed;
    top: 11%;
    left: ${({ShowMenu}) => ShowMenu ? '0px' : '-1000px'};
    width: 70vw;
    background-color: #ffffff;
    z-index: 2;
    padding: 2rem;
    transition: ${({ShowMenu}) => ShowMenu ? '.5s ease-in-out' : '1s ease-in-out'};
    box-shadow: 1px 2px 1px rgba(211, 211, 211, 0.055);
   
    ul{
        list-style: none;
    }

    li{
        margin-bottom:2rem;
    }
`

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;

`

export const Link = styled.a`
        text-decoration:none;
        font-size: 1.8rem;
        color: black;
        font-weight:600;
        text-transform: capitalize;
        
`

export const Right = styled.div`
    cursor: pointer;
`
export const HamburgerIcon = styled.div`
    position: absolute;
    top: 6.5%;
    cursor: pointer;

    span {
        position: absolute;
     }
`
export const SubLink = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    display: ${({subMenu}) => subMenu ? 'flex' : 'none'};
    margin-top:2rem;
    
    a{
        text-decoration:none;
        font-size: 1.5rem;
        color: black;
        font-weight:300;
        text-transform: capitalize;
        padding: 1.5rem;
        opacity: ${({subMenu}) => subMenu ? '1' : '0'};
        
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
`
