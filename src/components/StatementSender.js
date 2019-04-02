import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import {
  StyledWrapper,
  StyledTotalPriceWrapper,
  StyledFormWrapper,
  StyledInput,
  StyledButton
} from './StatementSender.styled'

class StatementSender extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      phoneNumber: ''
    }

    this._nameInputOnChange = this._nameInputOnChange.bind(this)
    this._numberInputOnChange = this._numberInputOnChange.bind(this)
    this._buttonOnClick = this._buttonOnClick.bind(this)
    this.getPhoneName = this.getPhoneName.bind(this)
  }

  _nameInputOnChange = event => {
    this.setState({
      userName: event.target.value
    })
  }

  _numberInputOnChange = event => {
    this.setState({
      phoneNumber: event.target.value
    })
  }

  getPhoneName = () => {
    const hash = window.location.search
    const index = hash.indexOf('phone')
    const perc = hash.indexOf('%20')

    return (
      hash.slice(index + 'phone'.length + 1, perc) +
      ' ' +
      hash.slice(perc + '%20'.length, hash.length)
    )
  }

  _buttonOnClick = () => {
    const {
      services,
      price,
      onTogglePushUpNotification,
      onNullifyServices,
      onNullifyPrice,
      onToggleSwitchers
    } = this.props

    const sendData = async () => {
      try {
        return await axios.post('http://www.mobifix.tech/telegram.php', {
          phoneName: this.getPhoneName(),
          price: price,
          name: this.state.userName,
          number: this.state.phoneNumber,
          services: services,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    const getResponse = async () => {
      const srvResponse = sendData()
        .then(response => {
          onTogglePushUpNotification(true)
          window.setTimeout(() => {
            onTogglePushUpNotification(false)
          }, 2000)
        })
        .catch(error => {
          console.log(error)
        })
    }

    if (
      (services.length !== 0,
      price !== 0,
      this.state.userName.length !== 0 && this.state.phoneNumber.length !== 0)
    ) {
      getResponse()
      this.setState({
        userName: '',
        phoneNumber: ''
      })
    }

    onNullifyServices()
    onNullifyPrice()
    onToggleSwitchers(false)
    window.setTimeout(() => {
      onToggleSwitchers(true)
    }, 100)
  }

  render() {
    const { price } = this.props

    return (
      <StyledWrapper>
        <StyledTotalPriceWrapper>
          <h2>Загальна сума</h2>
          <h2>{price} грн.</h2>
        </StyledTotalPriceWrapper>

        <StyledFormWrapper>
          <StyledInput
            type='text'
            onChange={this._nameInputOnChange}
            value={this.state.userName}
            placeholder="Ім'я"
            autoComplete='off'
          />
          <StyledInput
            type='number'
            onChange={this._numberInputOnChange}
            value={this.state.phoneNumber}
            placeholder='Номер телефону'
            autoComplete='off'
          />

          <StyledButton onClick={this._buttonOnClick}>
            Записатися на ремонт
          </StyledButton>
        </StyledFormWrapper>
      </StyledWrapper>
    )
  }
}

StatementSender.propTypes = {
  services: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  onTogglePushUpNotification: PropTypes.func.isRequired,
  onNullifyServices: PropTypes.func.isRequired,
  onNullifyPrice: PropTypes.func.isRequired,
  onToggleSwitchers: PropTypes.func.isRequired
}

export default StatementSender
