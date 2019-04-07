import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import {
    StyledWrapper,
    StyledContentWrapper,
    StyledContent,
    StyledClose,
    StyledHeader,
    StyledImage,
    StyledText,
    StyledDate,
    StyledEclipse
} from './FeedModal.styled'

class FeedModal extends React.Component {
    componentDidMount() {
        this.props.onCloseFeedsModalWindow
    }

    render() {
        const { 
            fmVisible,
            feedHeader,
            feedImage,
            feedText,
            feedDate, 
            onCloseFeedsModalWindow 
          } = this.props

        return(
            <StyledWrapper
                pose={fmVisible ? 'visible' : 'init'}
            >
                <StyledEclipse />
                <StyledContentWrapper>
                    <Scrollbars
                        autoHide
                    >
                        <StyledContent>
                            <StyledClose
                                onClick={onCloseFeedsModalWindow}
                            >
                                <img src='../img/close.svg' width='15px' />
                            </StyledClose>

                            <StyledHeader>{feedHeader}</StyledHeader>
                            <StyledImage src={feedImage} />
                            <StyledText>{feedText}</StyledText>
                            <StyledDate>{feedDate}</StyledDate>
                        </StyledContent>
                    </Scrollbars>
                </StyledContentWrapper>
            </StyledWrapper>
        )
    }
}

export default FeedModal