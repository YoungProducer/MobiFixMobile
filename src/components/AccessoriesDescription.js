import React from 'react'
import { NavLink } from 'react-router-dom'

import ImageWrapper from './ImageWrapper'
import RedirectButton from './RedirectButton'

import {
    StyledWrapper,
    StyledTextWrapper,
    StyledInfoBlock,
    StyledInfoBlocksWrapper
} from './AccessoriesDescription.styled'

class AccessoriesDescription extends React.Component {
    render() {
        const phonecase = require('../img/case.jpg')
        const headphones = require('../img/headphones.jpg')

        return(
            <>
                <StyledWrapper>
                    <StyledInfoBlocksWrapper>
                        <StyledInfoBlock>
                            <StyledTextWrapper>
                                Вибирайте аксесуари на свій смак
                            </StyledTextWrapper>
                            <ImageWrapper src={headphones} width={150}/>
                        </StyledInfoBlock>
                        <StyledInfoBlock>
                            <ImageWrapper src={phonecase} width={150}/>
                            <StyledTextWrapper>
                                Починаючи від зарядних пристроїв і до чохлів
                            </StyledTextWrapper>
                        </StyledInfoBlock>
                        <RedirectButton
                            url="/accessories"
                            text="Перейти"
                        />
                    </StyledInfoBlocksWrapper>
                </StyledWrapper>
            </>
        )
    }
}

export default AccessoriesDescription