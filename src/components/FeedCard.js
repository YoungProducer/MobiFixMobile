import React from 'react'
import PropTypes from 'prop-types'

import {
    StyledCardWrapper,
    StyledImage,
    StyledEclipse,
    StyledDescWrapper,
    StyledDescHeader,
    StyledDate
} from './FeedCard.styled'

const FeedCard = props => {
    const { 
        src,
        header,
        text,
        date,
        onOpenFeedsModalWindow
    } = props

    return(
        <StyledCardWrapper
            onClick={() => onOpenFeedsModalWindow(
                header,
                src,
                text,
                date
            )}
        >
            <StyledEclipse />
            <StyledImage src={src}/>
            <StyledDescWrapper>
                <StyledDate>{date}</StyledDate>
                <StyledDescHeader>
                    {header}
                </StyledDescHeader>
            </StyledDescWrapper>
        </StyledCardWrapper>
    )
}

FeedCard.propTypes = {
    src: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onOpenFeedsModalWindow: PropTypes.func.isRequired
}

export default FeedCard