import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import ClosedClub from './ClosedClub'

const StyledSiteBlock = styled.div`
    height: 100vh;
    width: 100%;
`

const Home = () => {
    return(
        <div>
            <StyledSiteBlock>

                <Header />
                <ClosedClub />
            </StyledSiteBlock>
        </div>
    )
}

export default Home