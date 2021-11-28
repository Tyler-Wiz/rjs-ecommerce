import { Container,Left,Right,Middle, Logo } from '../Styles/Menu.styled'
import * as BsIcons from 'react-icons/bs'


export const Menu = () => {
    return (
        <Container>
            <Left>
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
