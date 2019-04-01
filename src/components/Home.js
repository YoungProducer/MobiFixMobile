import React from 'react'
import styled from 'styled-components'

import ReactFullpage from '@fullpage/react-fullpage'
import 'fullpage.js/vendors/scrolloverflow'


import PushUpNotification from '../containers/PushUpNotification'
import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ClosedClub from '../containers/ClosedClub'
import AccessoriesDescription from './AccessoriesDescription'
import RepairsAdvantages from './RepairsAdvantages'
import Footer from './Footer'

import {
    StyledSiteBlock
} from './Home.styled'

const FullPageOptions = {
    licenseKey: '1EB53BF6-00984973-A88B8092-A6220857',
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
                <PushUpNotification />
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
                                    <Footer usefp/>
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