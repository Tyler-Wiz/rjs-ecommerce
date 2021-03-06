import { useState } from 'react'
import { ProductData } from '../Data/Data'
import * as AiIcons from 'react-icons/ai'
import { 
    Container, Wrapper, 
    ProductIcons, ExpandImage , 
    ImgContainer, Image, 
    ProductInfo, Button, Color, ColorWrapper } from '../Styles/Products.styled'


export const Product = () => {
    const [open, setOpen] = useState(false)
    const [expand, setExpand] = useState(0)

    return (
        <Container>
          <h3>Weekly BestSellers</h3>
          <Wrapper>
              {ProductData.map((item, i) => (
                  <div key={i}>
                      <ProductIcons>
                        <AiIcons.AiOutlinePlusCircle size={20}
                          onMouseOver={() => {setExpand(item.id); setOpen(!open)}} 
                          onMouseLeave={() => {setExpand(0); setOpen(false)}} 
                        />
                        <AiIcons.AiOutlineHeart size={20}/>
                      </ProductIcons>
                      {expand === item.id & open ? <ExpandImage>
                          <img src={item.expandImg} alt="" />
                      </ExpandImage> : ''}
                      <ImgContainer>
                        <Image src={item.Img} alt="" />
                      </ImgContainer>
                      <ProductInfo>
                        <Button>add to cart</Button>
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                         <ColorWrapper>
                             <Color bg='brown'></Color>
                             <Color bg='green'></Color> 
                             <Color bg='grey'></Color>
                         </ColorWrapper>
                      </ProductInfo> 

                  </div>
              ))}
          </Wrapper>
        </Container>
    )
}
