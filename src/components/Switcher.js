import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledInput,
  StyledSwitcherBg,
  StyledSwitcherBtn
} from './Switcher.styled'

class Switcher extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }

    this.onMouseClickHandle = this.onMouseClickHandle.bind(this)
  }

  onMouseClickHandle = (sname, sprice) => {
    this.setState({ active: !this.state.active })

    if (this.state.active !== true) {
        this.props.onAddService(sname, sprice)
        this.props.onAddPrice(sprice)
    } else {
        this.props.onRemoveService(sname)
        this.props.onSubtractPrice(sprice)
    }
  }

  render() {
    const { swid } = this.props

    return (
      <>
        <StyledInput type='checkbox' id={'check' + swid} />
        <StyledSwitcherBg
          pose={this.state.active ? 'active' : 'inactive'}
          id={'lblcheck' + swid}
          htmlFor={'check' + swid}
          onClick={() =>
            this.onMouseClickHandle(this.props.sname, this.props.sprice)
          }
        >
          <StyledSwitcherBtn pose={this.state.active ? 'active' : 'inactive'} />
        </StyledSwitcherBg>
      </>
    )
  }
}

Switcher.propTypes = {
  onAddService: PropTypes.func.isRequired,
  onRemoveService: PropTypes.func.isRequired,
  onAddPrice: PropTypes.func.isRequired,
  onSubtractPrice: PropTypes.func.isRequired
}

export default Switcher
