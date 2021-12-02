import { PopularData } from '../Data/Data'
import { Container, Wrapper, ImageContainer, Image, } from '../Styles/Popular.Styled'

export const Popular = () => {
    return (
        <Container>
            <h3>Popular Brands</h3>
            <Wrapper>
                {PopularData.map((item, i) => (
                    <li key={i}>
                        <ImageContainer>
                            <Image src={item.img} alt=""/>
                        </ImageContainer>   
                    </li>
                ))}
            </Wrapper>
        </Container>
    )
}
