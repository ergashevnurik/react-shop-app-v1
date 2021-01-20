import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroSection = styled.section `
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeroImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;

`
export const HeroH1 = styled.h1 `
    color: white;
    font-size: 3.5rem;

    margin-bottom: 20px;
`

export const HeroButton = styled(Link) `
    padding: 12px 20px;
    border: 2px solid white;
    transition: all .6s ease-in-out;
    text-decoration: none;
    color: white;

    &:hover {
        background: white;
        color: black;
    }
    
`