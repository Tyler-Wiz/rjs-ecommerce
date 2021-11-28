import {Container, Wrapper, Arrow, ImgContainer, Image, InfoContainer, Slide } from '../Styles/Slider.Styled'
import * as GrIcons from 'react-icons/gr'
import {SliderData } from '../Data/Data'
import { useState } from 'react'


export const Slider = () => {
    const [slideindex, setSlideIndex] = useState(0)
    
    const handleClick = (direction) => {
        if(direction === 'left') setSlideIndex(slideindex > 0 ? slideindex - 1 : SliderData.length - 1)
        if(direction === 'right') setSlideIndex(slideindex < SliderData.length - 1 ? slideindex + 1 : 0)
        console.log(SliderData.length)
     }

    

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
              <GrIcons.GrPrevious size={20} />
            </Arrow>
            <Wrapper slideIndex={slideindex}>
            {SliderData.map((item, i) => (
                <Slide bg={item.bg} key={i}>
                     <ImgContainer>
                        <Image src={item.img} alt=''/>
                     </ImgContainer>
                     <InfoContainer>
                         <h3>{item.title}</h3>
                         <p>{item.subtitle}</p>
                         <button>{item.btnText}</button>
                     </InfoContainer>
                </Slide>
                 ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
             <GrIcons.GrNext size={20}/>
            </Arrow>
        </Container>
    )
}
