import React from 'react'
import posed from 'react-pose'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = posed.div({
    init: { 
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    },
    active: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    }
})

const StyledList = styled(List)`
    position: absolute;
    background-color: #333;
    width: 100%;
    height: 100%;
    z-index: 1;
`

class DropDownMenu extends React.Component {
    render() {
        const { burgerState } = this.props

        console.log(this.props)

        return(
            <>
                <StyledList pose={burgerState ? 'active' : 'init'}/>
            </>
        )
    }
}

DropDownMenu.propTypes = {
    burgerState: PropTypes.bool.isRequired
}

export default DropDownMenu