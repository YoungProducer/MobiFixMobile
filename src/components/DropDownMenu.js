import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { 
    StyledListWrapper,
    StyledList,
    StyledListItem,
    StyledLink
} from './DropDownMenu.styled'

const phoneList = [
    {name: 'iPhone5S' , id: 1},
    {name: 'iPhoneSE' , id: 2},
    {name: 'iPhone6'  , id: 3},
    {name: 'iPhone6+' , id: 4},
    {name: 'iPhone6S' , id: 5},
    {name: 'iPhone6S+', id: 6},
    {name: 'iPhone7'  , id: 7},
    {name: 'iPhone7+' , id: 8},
    {name: 'iPhone8'  , id: 9},
    {name: 'iPhone8+' , id: 10},
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
        const { burgerState, phonesListState, onTogglePhonesListState, onChangeSelectedPhone } = this.props

        return(
            <>
                <StyledListWrapper pose={burgerState ? 'lwActive' : 'lwInit'}>
                    <StyledList pose={burgerState && !phonesListState ? 'listActive' : 'listInit'}>
                        <StyledListItem 
                            onClick={() => {
                                onTogglePhonesListState(true)
                            }}
                        >
                            <StyledLink>
                                Ремонт
                            </StyledLink>
                        </StyledListItem>

                        <StyledListItem>
                            <NavLink
                                to="/accessories"
                            >
                                <StyledLink>
                                    Аксесуари
                                </StyledLink>
                            </NavLink>
                        </StyledListItem>

                        <StyledListItem>
                            <NavLink
                                to="/needtoknow"
                            >
                                <StyledLink>
                                    Необхідно знати
                                </StyledLink>
                            </NavLink>
                        </StyledListItem>

                        <StyledListItem>
                            <NavLink
                                to="/contacts"
                            >
                                <StyledLink>
                                    Контакти
                                </StyledLink>
                            </NavLink>
                        </StyledListItem>

                        <StyledListItem>
                            <NavLink
                                to="/about"
                            >
                                <StyledLink>
                                    Чому ми
                                </StyledLink>
                            </NavLink>
                        </StyledListItem>
                    </StyledList>

                    <StyledList pose={burgerState && phonesListState ? 'listActive' : 'listInit'}>
                        {this.state.phones.map(phone => {
                            return (
                                <StyledListItem
                                    key={phone.id}
                                    onClick={() => {
                                        onChangeSelectedPhone(phone.name)
                                    }}
                                >
                                    <NavLink
                                        to={"/services/" + phone.name}
                                    >
                                        <StyledLink>
                                            {phone.name}
                                        </StyledLink>
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
    onChangeSelectedPhone: PropTypes.func.isRequired,
    onTogglePhonesListState: PropTypes.func.isRequired,
    burgerState: PropTypes.bool.isRequired,
    phonesListState: PropTypes.bool.isRequired
}

export default DropDownMenu