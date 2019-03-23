import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleBurgerState } from '../store/DropDownMenu/actions'

import {
    StyledWrapper,
    StyledStick
} from './Burger.styled'

class Burger extends React.Component {
    render() {
        const { active, onToggleBurgerState } = this.props

        return(
            <StyledWrapper 
                pose={active ? 'slided' : 'init'} 
                onClick={() => {
                    onToggleBurgerState(!active)
                }}>
                <StyledStick pose={active ? 'activetop' : 'init'}/>
                <StyledStick pose={active ? 'active' : 'init'}/>
                <StyledStick pose={active ? 'activebottom' : 'init'}/>
            </StyledWrapper>
        )
    }
}

Burger.propTypes = {
    onToggleBurgerState: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
}

export default Burger
