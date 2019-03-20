import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import '../img/galc.svg'

const Wrapper = posed.div({
    init: {
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    },
    visible: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    }
})

const StyledWrapper = styled(Wrapper)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #55b559;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.h2`
    color: #fff;
`

const StyledGalc = styled.object`
    margin-left: 5px;
    height: 25px;
`

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