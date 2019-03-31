import React from 'react'

import PushUpNotification from '../containers/PushUpNotification'
import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ServicesList from './ServicesList'
import Footer from './Footer'

class Services extends React.Component {
    render() {
        return(
            <>
                <PushUpNotification />
                <DropDownMenu />
                <Header />
                <Burger />
                <ServicesList />
            </>
        )
    }
}

export default Services