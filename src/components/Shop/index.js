import {
    ShopSection,
    ShopContainer,
    ShopRow,
    ShopColumn,
    ShopCardHead,
    ShopCardBody,
    ShopCardH3,
    ShopCardButtonView,
    ShopCardButtonAdd,
    ShopCardButtonWrapper
} from './ShopElements'
import React, { PureComponent } from 'react'
import ProductService from '../../Service/ProductService'

class ShopComponents extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductService.getAllProducts().then((res) => {
            this.setState({products: res.data})
        })
    }

    render() {
        return (
            <ShopSection>
                <ShopContainer>
                    <ShopRow>
                        {this.state.products.map(product => (
                            <ShopColumn key={product.id}>
                                <ShopCardHead>
                                    {/* <ShopCardImage src={card.img} alt={card.alt}></ShopCardImage> */}
                                </ShopCardHead>
                                <ShopCardBody>
                                    <ShopCardH3>{product.productName}</ShopCardH3>
                                    <ShopCardH3>{product.productPrice} UZS</ShopCardH3>
                                    <ShopCardButtonWrapper>
                                        <ShopCardButtonView to='/{product.id}'>View</ShopCardButtonView>
                                        <ShopCardButtonAdd to={product.id}>Add</ShopCardButtonAdd>
                                    </ShopCardButtonWrapper>
                                </ShopCardBody>
                            </ShopColumn>
                        ))}
                    </ShopRow>
                </ShopContainer>
            </ShopSection>
        )
    }
}

export default ShopComponents
