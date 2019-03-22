import React from 'react'
import styled from 'styled-components'

import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ClosedClub from './ClosedClub'

const StyledSiteBlock = styled.div`
    height: 100vh;
    width: 100%;
`

const Home = () => {
    return(
        <>
            <StyledSiteBlock>
                <DropDownMenu />
                <Header />
                <ClosedClub />
            </StyledSiteBlock>
        </>
    )
}

export default Home