import React from 'react'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import {
    NavbarSection,
    NavbarContainer,
    NavbarLogo,
    NavbarUnOrderedList,
    NavbarListItem,
    NavbarLink,
    MobileIcon
} from './NavbarElements'

import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo to="/">MENZ STORE</NavbarLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                <input placeholder="Enter To Search" className="input" />
                <button type="submit" className="button"><FaSearch /></button>
                <NavbarUnOrderedList>
                    <NavbarListItem>
                        <NavbarLink to="/man">Man</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to="/woman">Woman</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarLink to="/kids">Kids</NavbarLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <FaShoppingCart className="fa fa-shopping-cart"/>
                        <FaHeart className="fa fa-heart"/>
                    </NavbarListItem>
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
