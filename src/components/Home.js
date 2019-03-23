import React from 'react'
import styled from 'styled-components'

import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ClosedClub from './ClosedClub'
import AccessoriesLink from './AccessoriesLink'

import {
    StyledSiteBlock
} from './Home.styled'

const Home = () => {
    return(
        <>
            <StyledSiteBlock>
                <DropDownMenu />
                <Header />
                <ClosedClub />
                <AccessoriesLink />
            </StyledSiteBlock>
        </>
    )
}

export default Home