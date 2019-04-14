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

class FeedCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hiden: true
        }
    }

    componentDidMount() {
        this.setState({
            hiden: false
        })
    }

    render() {
        const { 
            src,
            header,
            text,
            date,
            onOpenFeedsModalWindow
        } = this.props
    
        return(
            <StyledCardWrapper
                pose={this.state.hiden ? 'hide' : 'init'}
                onClick={() => {
                    onOpenFeedsModalWindow(
                    header,
                    src,
                    text,
                    date
                    )
                }}
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
}

FeedCard.propTypes = {
    src: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onOpenFeedsModalWindow: PropTypes.func.isRequired
}

export default FeedCard