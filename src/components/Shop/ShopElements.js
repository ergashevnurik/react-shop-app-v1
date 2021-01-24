import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ShopSection = styled.section `
    width: 100%;
    background:#0b0b13;
    color: white;
    height: 100%;
`

export const ShopContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const ShopRow = styled.div `
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    padding-top: 80px;
`

export const ShopColumn = styled.div `
    margin: 5px;
    width: 250px;

    background: black;
    border: 1px solid white;

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const ShopCardHead = styled.div `

`

export const ShopCardImage = styled.img `
    width: 100%;
    height: 100%;
`

export const ShopCardBody = styled.div `
    padding: 10px;
`

export const ShopCardH3 = styled.h3 `
    margin-bottom: 5px;
`

export const ShopCardButtonView = styled(Link) `
    padding: 12px 20px;
    outline: none;
    border: none;
    user-select: unset;
    border: 1px solid white;
    transition: all .2s ease-in-out;
    cursor: pointer;
    background: transparent;
    color: white;

    &:hover {
        background: white;
        color: black;
    }

`

export const ShopCardButtonAdd = styled(Link) `
    padding: 12px 20px;
    outline: none;
    border: none;
    user-select: unset;
    border: 1px solid white;
    margin-left: 5px;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: black;
        color: white;
    }
`

export const ShopCardButtonWrapper = styled.div `
    display: flex;
`