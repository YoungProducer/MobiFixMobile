import React from 'react'
import styled from 'styled-components'

import Burger from '../containers/Burger'

import {
    StyledBlock,
    StyledLogo
} from './Header.styled'

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