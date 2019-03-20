import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const Wrapper = posed.div({
    init: {
        x: 20
    },
    slided: {
        x: window.innerWidth - 20 - 20
    }
})

const StyledWrapper = styled(Wrapper)`
    position: fixed;
    top: 13px;
    width: 20px;
    height: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Stick = posed.div({
    init: { 
        applyAtStart: { display: 'block'},
        rotateZ: 0,
        y: 0
    },
    activetop: {
        rotateZ: 45,
        y: 5
    },
    activebottom: {
        rotateZ: -45,
        y: -5
    },
    active: {
        applyAtStart: { display: 'none'}
    }
})

const StyledStick = styled(Stick)`
    width: 20px;
    height: 2px;
    background-color: #fff;
` 

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
        return(
            <StyledWrapper 
                pose={this.state.active ? 'slided' : 'init'} 
                onClick={this._onClickHandle}>
                <StyledStick pose={this.state.active ? 'activetop' : 'init'}/>
                <StyledStick pose={this.state.active ? 'active' : 'init'}/>
                <StyledStick pose={this.state.active ? 'activebottom' : 'init'}/>
            </StyledWrapper>
        )
    }
}

export default Burger