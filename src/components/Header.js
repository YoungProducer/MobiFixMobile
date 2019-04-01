import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    StyledBlock,
    StyledLogoWrapper,
    StyledLogo
} from './Header.styled'

class Header extends React.Component {
    render() {
        return(
            <StyledBlock>
                <StyledLogoWrapper>
                    <NavLink
                        to="/"
                    >
                        <StyledLogo>
                            MobiFix
                        </StyledLogo>
                    </NavLink>
                </StyledLogoWrapper>
            </StyledBlock>
        )
    }
}

export default Header