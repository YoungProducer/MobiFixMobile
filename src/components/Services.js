import React from 'react'

import PushUpNotification from '../containers/PushUpNotification'
import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import ServicesList from './ServicesList'
import Footer from './Footer'

import { StyledWrapper } from './Services.styled'

class Services extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <PushUpNotification />
        <DropDownMenu />
        <Header />
        <Burger />
        <ServicesList />
      </StyledWrapper>
    )
  }
}

export default Services
