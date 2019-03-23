import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import '../img/galc.svg'

import {
    StyledWrapper,
    StyledText,
    StyledGalc
} from './PushUpNotification.styled'

class PushUpNotification extends React.Component {
    constructor() {
        super()

        this.state = {
            visible: false
        }
    }

    render() {
        return(
            <>
                <StyledWrapper pose={this.props.visible ? 'visible' : 'init'}>
                    <StyledText>
                        Надіслано
                    </StyledText>
                    <StyledGalc data="img/galc.svg" type="image/svg+xml"></StyledGalc>
                </StyledWrapper>
            </>
        )
    }
}

export default PushUpNotification