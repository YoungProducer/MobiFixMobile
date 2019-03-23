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
    constructor() {
        super()

        this.state = { 
            active: false
        }

        this._onClickHandle = this._onClickHandle.bind(this)
    }

    _onClickHandle() {
        this.setState({active: !this.state.active})
    }

    render() {
        const { onToggleBurgerState } = this.props

        console.log(this.props)

        return(
            <StyledWrapper 
                pose={this.state.active ? 'slided' : 'init'} 
                onClick={() => {
                    this._onClickHandle()
                    onToggleBurgerState(!this.state.active)
                }}>
                <StyledStick pose={this.state.active ? 'activetop' : 'init'}/>
                <StyledStick pose={this.state.active ? 'active' : 'init'}/>
                <StyledStick pose={this.state.active ? 'activebottom' : 'init'}/>
            </StyledWrapper>
        )
    }
}

Burger.propTypes = {
    onToggleBurgerState: PropTypes.func.isRequired
}

export default Burger
