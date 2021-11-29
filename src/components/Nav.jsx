import { Container, HamburgerIcon, LinkWrapper,Left,Link,Right,SubLink } from "../Styles/Nav.Styled"
import { useState } from "react"
import { NavData } from "../Data/Data"
import { Toggle } from "../utilities/Toggle"
import * as FiIcons from 'react-icons/fi'
import * as VscIcons from 'react-icons/vsc'

export const Nav = () => {
    const [IsOpen, openElement] = Toggle()
    const [openSub, setOpenSub] = useState(false)
    const [selected, setSelected] = useState(0)
 
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
                                {selected === item.id && openSub === true ? 
                                <SubLink subMenu={openSub}>
                                    <a href='/'>{item.linkOne}</a>
                                    <a href='/'>{item.linkTwo}</a>
                                    <a href='/'>{item.linkThree}</a>
                                </SubLink> 
                                : "" }
                            </Left>
                            <Right onClick={() => {setSelected(item.id); setOpenSub(!openSub);}}>
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
