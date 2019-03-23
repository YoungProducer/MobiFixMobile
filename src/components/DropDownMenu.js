import React from 'react'
import posed from 'react-pose'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { 
    StyledList
} from './DropDownMenu.styled'

class DropDownMenu extends React.Component {
    render() {
        const { burgerState } = this.props

        console.log(this.props)

        return(
            <>
                <StyledList pose={burgerState ? 'active' : 'init'}/>
            </>
        )
    }
}

DropDownMenu.propTypes = {
    burgerState: PropTypes.bool.isRequired
}

export default DropDownMenu