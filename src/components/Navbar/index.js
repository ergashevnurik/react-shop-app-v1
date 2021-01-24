import React from 'react'
import {
    NavbarSection,
    NavbarContainer,
    NavbarLogo,
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
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
