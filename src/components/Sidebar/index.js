import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}><CloseIcon /></Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/man" onClick={toggle}>
                        Man
                    </SidebarLink>
                    <SidebarLink to="/woman" onClick={toggle}>
                        Woman
                    </SidebarLink>
                    <SidebarLink to="/kids" onClick={toggle}>
                        Kids
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar