import { NewArrivalData } from '../Data/Data'
import * as AiIcons from 'react-icons/ai'
import { 
    Container, Wrapper, 
    ProductIcons, 
    ImgContainer, Image, 
    ProductInfo, Button, Color, ColorWrapper } from '../Styles/Products.styled'


export const NewArrivals = () => {
    return (
        <Container>
          <h3>New Arrivals</h3>
          <Wrapper>
              {NewArrivalData.map((item, i) => (
                  <div key={i}>
                      <ProductIcons>
                        <AiIcons.AiOutlineHeart size={20}/>
                      </ProductIcons>
                      <ImgContainer>
                        <Image src={item.Img} alt="" />
                      </ImgContainer>
                      <ProductInfo>
                        <Button>add to cart</Button>
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                         <ColorWrapper>
                             <Color bg='pink'></Color>
                             <Color bg='red'></Color> 
                             <Color bg='orange'></Color>
                         </ColorWrapper>
                      </ProductInfo> 

                  </div>
              ))}
          </Wrapper>
        </Container>
    )
}