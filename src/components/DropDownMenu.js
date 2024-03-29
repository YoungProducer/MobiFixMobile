import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  StyledListWrapper,
  StyledList,
  StyledListItem,
  StyledLink,
  MainList,
  MainItem
} from './DropDownMenu.styled'

const phoneList = [
  { name: 'iPhone 5S' },
  { name: 'iPhone SE' },
  { name: 'iPhone 6' },
  { name: 'iPhone 6+' },
  { name: 'iPhone 6S' },
  { name: 'iPhone 6S+' },
  { name: 'iPhone 7' },
  { name: 'iPhone 7+' },
  { name: 'iPhone 8' },
  { name: 'iPhone 8+' }
]

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phones: phoneList,
      phonesList: false
    }
  }

  render() {
    const {
      burgerState,
      phonesListState,
      onTogglePhonesListState,
      onChangeSelectedPhone,
      onNullifyServices,
      onNullifyPrice,
      onToggleSwitchers
    } = this.props

    return (
      <>
        <StyledListWrapper pose={burgerState ? 'lwActive' : 'lwInit'}>
          <StyledList
            pose={burgerState && !phonesListState ? 'listActive' : 'listInit'}
            justify='center'
          >
                <MainItem
                  onClick={() => {
                    onTogglePhonesListState(true)
                  }}
                >
                  <StyledLink>Ремонт</StyledLink>
                </MainItem>

                <MainItem
                    onClick={() => {
                        onTogglePhonesListState(false)
                    }}
                >
                    <NavLink
                        to="/accessories"
                    >
                        <StyledLink>
                            Аксесуари
                        </StyledLink>
                    </NavLink>
                </MainItem>

                <MainItem
                    onClick={() => {
                        onTogglePhonesListState(false)
                    }}
                >
                    <NavLink
                        to="/feeds"
                    >
                        <StyledLink>
                            Необхідно знати
                        </StyledLink>
                    </NavLink>
                </MainItem>

                <MainItem
                    onClick={() => {
                        onTogglePhonesListState(false)
                    }}
                >
                    <NavLink
                        to="/contacts"
                    >
                        <StyledLink>
                            Контакти
                        </StyledLink>
                    </NavLink>
                </MainItem>

                <MainItem
                    onClick={() => {
                        onTogglePhonesListState(false)
                    }}
                >
                    <NavLink
                        to="/about"
                    >
                        <StyledLink>
                            Чому ми
                        </StyledLink>
                    </NavLink>
                </MainItem>
            </StyledList>

          <StyledList
            pose={burgerState && phonesListState ? 'listActive' : 'listInit'}
            justify='space-around'
          >
            {this.state.phones.map((phone, index) => {
              return (
                <StyledListItem
                  key={index}
                  onClick={() => {
                    onNullifyServices()
                    onNullifyPrice()
                    onTogglePhonesListState(false)
                    onToggleSwitchers(false)
                    window.setTimeout(() => {
                      onToggleSwitchers(true)
                    }, 100)
                  }}
                >
                  <NavLink to={'/services?phone=' + phone.name}>
                    <StyledLink>{phone.name}</StyledLink>
                  </NavLink>
                </StyledListItem>
              )
            })}
          </StyledList>
        </StyledListWrapper>
      </>
    )
  }
}

DropDownMenu.propTypes = {
  burgerState: PropTypes.bool.isRequired,
  phonesListState: PropTypes.bool.isRequired,
  onChangeSelectedPhone: PropTypes.func.isRequired,
  onTogglePhonesListState: PropTypes.func.isRequired,
  onNullifyServices: PropTypes.func.isRequired,
  onNullifyPrice: PropTypes.func.isRequired,
  onToggleSwitchers: PropTypes.func.isRequired
}

export default DropDownMenu
