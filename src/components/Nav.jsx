import styled from "styled-components"
import { NavData } from "../Data/Data"
import { Toggle } from "../utilities/Toggle"
import * as FiIcons from 'react-icons/fi'
import * as VscIcons from 'react-icons/vsc'

const Container = styled.nav`
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

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Link = styled.a`
        text-decoration:none;
        font-size: 1.8rem;
        color: black;
        font-weight:600;
        text-transform: capitalize;
`

const Right = styled.div`
    cursor: pointer;
`
const HamburgerIcon = styled.div`
    position: absolute;
    top: 6.5%;
    cursor: pointer;

    span {
        position: absolute;
    }
`
const SubLink = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: ${({ShowSubMenu}) => ShowSubMenu? '0px' : '-1000px'};
    transition: ${({ShowSubMenu}) => ShowSubMenu? '1s ease-in-out' : '1s ease-in-out'};

    a{
        text-decoration:none;
        font-size: 1.2rem;
        color: black;
        font-weight:300;
        text-transform: capitalize;
        padding: 1rem;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
`

export const Nav = () => {
    const [IsOpen, openElement] = Toggle()
 



    return (
        <>
        <HamburgerIcon onClick={openElement}>
            {IsOpen ? <span><VscIcons.VscChromeClose size={30}/></span> : <span><FiIcons.FiMenu size={30} /></span>}
        </HamburgerIcon>
        <Container ShowMenu={IsOpen}>
            <ul>
                {NavData.map((item, i) => (
                    <li key={i}>
                        <LinkWrapper>
                            <Left>
                                <Link href="/">{item.name}</Link> 
                                <SubLink>
                                    {/* <a href='/'>{item.linkOne}</a>
                                    <a href='/'>{item.linkTwo}</a>
                                    <a href='/'>{item.linkThree}</a> */}
                                </SubLink>
                            </Left>
                            <Right>
                                <p>{item.icon}</p>
                            </Right>
                        </LinkWrapper>
                    </li>
                ))}
            </ul>
        </Container>
        </>
    )
}
