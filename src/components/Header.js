import React from 'react'
import styled from 'styled-components'

import Burger from '../containers/Burger'

const StyledBlock = styled.div`
    background-color: #2C2C2C;
`
const StyledLogo = styled.h1`
    color: #fff;
    font-size: 200%;
    font-weight: 200;
    text-align: center;
`

class Header extends React.Component {
    render() {
        return(
            <StyledBlock>
                <Burger />
                <StyledLogo>
                    MobiFix
                </StyledLogo>
            </StyledBlock>
        )
    }
}

export default Header