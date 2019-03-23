import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import {
    StyledWrapper,
    StyledImage
} from './ImageWrapper.styled'

class ImageWrapper extends React.Component {
    render() {
        return(
            <>
                <StyledWrapper>
                    <StyledImage src={this.props.src} width={this.props.width}/>
                </StyledWrapper>
            </>
        )
    }
}

export default ImageWrapper