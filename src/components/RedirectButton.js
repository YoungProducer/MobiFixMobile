import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    StyledButton,
    StyledLink
} from './RedirectButton.styled'

class RedirectButton extends React.Component {
    render() {
        return(
            <StyledButton>
                <NavLink
                    to={this.props.url}
                >
                    <StyledLink>
                        {this.props.text}
                    </StyledLink>
                </NavLink>
            </StyledButton>
        )
    }
}

export default RedirectButton