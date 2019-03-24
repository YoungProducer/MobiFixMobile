import React from 'react'
import PropsTypes from 'prop-types'

import '../img/galc.svg'

import {
    StyledWrapper,
    StyledText,
    StyledGalc
} from './PushUpNotification.styled'

class PushUpNotification extends React.Component {
    render() {
        const { visible } = this.props

        return(
            <>
                <StyledWrapper pose={visible ? 'visible' : 'init'}>
                    <StyledText>
                        Надіслано
                    </StyledText>
                    <StyledGalc data="img/galc.svg" type="image/svg+xml"></StyledGalc>
                </StyledWrapper>
            </>
        )
    }
}

PushUpNotification.propTypes = {
    visible: PropsTypes.bool.isRequired
}

export default PushUpNotification