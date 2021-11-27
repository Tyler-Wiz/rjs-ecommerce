import { Container,Left,Right,Middle, Logo } from '../Styles/Nav.styled'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'

export const Nav = () => {
    return (
        <Container>
            <Left>
             <FiIcons.FiMenu size={30} />
             <BsIcons.BsPerson size={20}/>
            </Left>
            <Middle>
                <Logo>Eliza</Logo>
            </Middle>
            <Right>
                <BsIcons.BsSearch size={25}/>
                <BsIcons.BsCart3 size={20}/>
            </Right>
        </Container>
    )
}
