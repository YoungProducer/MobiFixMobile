import React from 'react'
import PropsTypes from 'prop-types'

import {
    StyledWrapper,
    StyledImage
} from './ImageWrapper.styled'

class ImageWrapper extends React.Component {
    render() {
        const { src, width } = this.props

        return(
            <>
                <StyledWrapper>
                    <StyledImage src={src} width={width}/>
                </StyledWrapper>
            </>
        )
    }
}

ImageWrapper.propTypes = {
    src: PropsTypes.string.isRequired,
    width: PropsTypes.number
}

export default ImageWrapper