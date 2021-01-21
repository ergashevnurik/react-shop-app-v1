import React, {useState} from 'react'
import { HeroData } from '../../Data/HeroData'
import {
    HeroSection,
    HeroImage,
    HeroH1,
    HeroButton
} from './HeroElements'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const Hero = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextState = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevState = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) && slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            
            <FaArrowAltCircleLeft onClick={prevState} className="leftArrow" />
            <FaArrowAltCircleRight onClick={nextState} className="rightArrow" />
            
            {HeroData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div className="slide-container">
                                <HeroImage src={slide.img} alt="Hello" />
                                <div className="slide-caption">
                                    <HeroH1>{slide.h1}</HeroH1>
                                    <HeroButton to="/shop">Shop Now</HeroButton>
                                </div>
                            </div>
                        )}

                        
                    </div>
                )
            })}
        </HeroSection>
    )
}

export default Hero
