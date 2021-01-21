import React, {useState} from 'react'
import { HeroData } from '../../Data/HeroData'
import {
    HeroSection,
    HeroImage,
    HeroH1,
    HeroButton
} from './HeroElements'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

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
            
            <BiLeftArrow onClick={prevState} className="leftArrow" />
            <BiRightArrow onClick={nextState} className="rightArrow" />
            
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
