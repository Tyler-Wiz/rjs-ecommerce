import styled from 'styled-components'
import { ProductData } from '../Data/Data'
import * as AiIcons from 'react-icons/ai'

const Container = styled.section`
    width: 90vw;
    text-transform: capitalize;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        text-align:center;
        font-size: 1.4rem;
        margin: 5rem 0;
    }

`
const Wrapper =  styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin: 0 auto;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const Image = styled.img`
    width: 70%;
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  p{
      margin: .3rem;
      font-size: 1.1rem;
      font-weight:600;
  }
`

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    margin: .6rem;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
`

const ProductIcons = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem;
    cursor: pointer;
`

const ColorWrapper = styled.div`
    display: flex;
`

const Color = styled.div`
    background-color: ${props => props.bg};
    width: 1.3rem;
    height: 1.3rem;
    margin: .2rem;
    border-radius: 50%;
`

export const Product = () => {
    return (
        <Container>
          <h3>Weekly BestSellers</h3>
          <Wrapper>
              {ProductData.map((item, i) => (
                  <div key={i}>
                      <ProductIcons>
                        <AiIcons.AiOutlinePlusCircle size={20}/>
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
