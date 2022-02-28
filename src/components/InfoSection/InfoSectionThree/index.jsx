import React from 'react'
import { Button } from '../../ButtonElements'
import ImgBg3 from '../../../images/svg-3.svg'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,       
} from '../InfoSectionElements'

const InfoSection = ({lightBg,imgStart, id, alt, topLine, lightText,headLine,darkText,descripition,buttonLabel, dark, primary,dark2 }) => {
  return (
      <>
        <InfoContainer ligthBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{descripition}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>                        
                    <Column2>
                        <ImgWrap>
                            <Img src={ImgBg3} alt={alt} />
                        </ImgWrap>
                    </Column2>                   
                </InfoRow>
            </InfoWrapper>        
        </InfoContainer>      
      </>
    
  )
}

export default InfoSection