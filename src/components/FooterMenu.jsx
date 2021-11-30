import { FooterMenuData } from "../Data/Data"
import { Container,Wrapper,
         MenuContainer,DropContainer,
         PaymentContainer, IconSpan } from "../Styles/FooterMenu.Styled"
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'

export const FooterMenu = () => {
    return (
        <Container>
            <Wrapper>
                {FooterMenuData.map((item, i) => (
                    <li key={i}>
                        <MenuContainer>
                          <h3>{item.Main}</h3>
                          <GrIcons.GrFormDown size={25}/>
                        </MenuContainer>
                        <DropContainer>
                            <p>{item.dropOne}</p>
                            <p>{item.dropTwo}</p>
                            <p>{item.dropThree}</p>
                            <p>{item.dropFour}</p>
                            <p>{item.dropFive}</p>
                        </DropContainer>
                    </li>
                ))}
            </Wrapper>
            <PaymentContainer>
             <IconSpan bg='DodgerBlue'>
                 <FaIcons.FaCcPaypal size={35}/>
             </IconSpan>
             <IconSpan bg='DarkOrange'>
                 <FaIcons.FaCcMastercard size={35}/>
             </IconSpan>
             <IconSpan bg='SteelBlue'>
                 <FaIcons.FaCcVisa size={35}/>
             </IconSpan>
             <IconSpan bg='LightSkyBlue'>
                 <FaIcons.FaStripe size={35}/>
             </IconSpan>
             <IconSpan bg='DarkOrange'>
                 <FaIcons.FaCcAmazonPay size={35}/>
             </IconSpan>
            </PaymentContainer>
        </Container>
    )
}
