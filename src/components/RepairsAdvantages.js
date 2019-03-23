import React from 'react'

import RedirectButton from './RedirectButton'

import { 
    StyledWrapper,
    StyledText,
    StyledVideo
} from './RepairsAdvantages.styled'

class RepairsAdvantages extends React.Component {
    render() {
        const video = require('../img/iphonexs.mp4')

        return(
            <StyledWrapper>
                <StyledText>
                    Чому варто ремонтувати телефони та купувати аксесуари саме у нас?
                </StyledText>
                <StyledVideo src={video} autoPlay playsInline/>
                <RedirectButton 
                    url="/about"
                    text="Перейти"
                />
            </StyledWrapper>
        )
    }
}

export default RepairsAdvantages

