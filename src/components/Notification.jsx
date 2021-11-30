import {Container, Wrapper, Form, Social } from '../Styles/Notification.Styled'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'

export const Notification = () => {
    return (
        <Container>
           <h3>Sign up for latest Clothing Updates</h3> 
           <Wrapper>
               <Form action="">
                 <input type="text" />
                 <button>Sign up</button>
               </Form>
               <Social>
                 <span><BsIcons.BsFacebook size={20} /></span> 
                 <span><AiIcons.AiFillTwitterCircle size={20} /></span> 
                 <span><BsIcons.BsInstagram size={20}/></span> 
                 <span><AiIcons.AiOutlineWhatsApp size={20} /></span>
                 <span><AiIcons.AiOutlineWechat size={20}/></span>
               </Social>
           </Wrapper>
        </Container>
    )
}
