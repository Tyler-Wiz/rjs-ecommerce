import { Container, HamburgerIcon, LinkWrapper,Left,Link,Right,SubLink } from "../Styles/Nav.Styled"
import { useState } from "react"
import { NavData } from "../Data/Data"
import { Toggle } from "../utilities/Toggle"
import * as FiIcons from 'react-icons/fi'
import * as VscIcons from 'react-icons/vsc'
import * as GrIcons from 'react-icons/gr'

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
                        <LinkWrapper >
                            <Left>
                                <Link onClick={() => {setSelected(item.id); setOpenSub(!openSub);}}>{item.name}</Link> 
                                {selected === item.id && openSub === true ? 
                                <SubLink subMenu={openSub}>
                                    <a href='/'>{item.linkOne}</a>
                                    <a href='/'>{item.linkTwo}</a>
                                    <a href='/'>{item.linkThree}</a>
                                    <a href='/'>{item.linkFour}</a>
                                    <a href='/'>{item.linkFive}</a>
                                </SubLink> 
                                : "" }
                            </Left>
                            <Right onClick={() => {setSelected(item.id); setOpenSub(!openSub);}}>
                               {selected === item.id && openSub === true ? <GrIcons.GrFormDown size={30}/> : <GrIcons.GrFormNext size={30}/> }
                            </Right>
                        </LinkWrapper>
                    </li>
                ))}
            </ul>
        </Container>
        </>
    )
}
