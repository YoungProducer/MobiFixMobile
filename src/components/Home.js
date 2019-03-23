import React from 'react'
import styled from 'styled-components'

import ReactFullpage from '@fullpage/react-fullpage'
import 'fullpage.js/vendors/scrolloverflow'


import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ClosedClub from './ClosedClub'
import AccessoriesDescription from './AccessoriesDescription'
import RepairsAdvantages from './RepairsAdvantages'

import {
    StyledSiteBlock
} from './Home.styled'

const FullPageOptions = {
    scrollOverflow: true
}

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: FullPageOptions
        }
    }

    render() {
        return(
            <>
                <Burger />
                <DropDownMenu />
                <Header />
                <ReactFullpage 
                    {...this.state.options}
                    render={({state, fullPageApi}) => {
                        return(
                            <>
                                <div id="fullpage-wrapper">
                                    <StyledSiteBlock className="section">
                                        <ClosedClub />
                                    </StyledSiteBlock>
                                    <StyledSiteBlock className="section">
                                        <AccessoriesDescription />
                                    </StyledSiteBlock>
                                    <StyledSiteBlock className="section">
                                        <RepairsAdvantages />
                                    </StyledSiteBlock>
                                </div>
                            </>
                        )
                    }}
                />
            </>
        )
    }
}

export default Home