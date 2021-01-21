import React from 'react'
import { ShopData } from '../../Data/ShopData'
import {
    ShopSection,
    ShopContainer,
    ShopRow,
    ShopColumn,
    ShopCardHead,
    ShopCardImage,
    ShopCardBody,
    ShopCardH3,
    ShopCardButtonView,
    ShopCardButtonAdd,
    ShopCardButtonWrapper
} from './ShopElements'

const ShopComponent = () => {
    return (
        <ShopSection>
            <ShopContainer>
                <ShopRow>
                    {ShopData.map((card, index) => (
                        <ShopColumn key={index}>
                            <ShopCardHead>
                                <ShopCardImage src={card.img} alt={card.alt}></ShopCardImage>
                            </ShopCardHead>
                            <ShopCardBody>
                                <ShopCardH3>{card.h3}</ShopCardH3>
                                <ShopCardButtonWrapper>
                                    <ShopCardButtonView>View</ShopCardButtonView>
                                    <ShopCardButtonAdd>Add</ShopCardButtonAdd>
                                </ShopCardButtonWrapper>
                            </ShopCardBody>
                        </ShopColumn>
                    ))}
                </ShopRow>
            </ShopContainer>
        </ShopSection>
    )
}

export default ShopComponent
