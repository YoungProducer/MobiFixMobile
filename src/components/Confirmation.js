import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Field, Submit } from './Confirmation.styled';
import axios from 'axios';

class Confirmation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: ''
    };
  }

  _sendForm = () => {
    const { name, phone } = this.state;
    const {
      cart,
      onShowPushUpNotification,
      onHidePushUpNotification
    } = this.props;

    axios
      .post('http://www.mobifix.tech/accessorytelegram.php', {
        name: name,
        phone: phone,
        cart: cart
      })
      .then(response => {
        onShowPushUpNotification('Замовлення оформленно'); // Remove after axios will work
        window.setTimeout(() => {
          onHidePushUpNotification();
        }, 2000);
      })
  };

  _handleField = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { isVisible } = this.props;

    return (
      <Container
        pose={isVisible ? 'confirmationVisible' : 'confirmationHidden'}
      >
        <div>
          <Field
            name='name'
            placeholder="Прізвище та ім'я"
            onChange={this._handleField}
          />
          <Field
            name='phone'
            placeholder='Номер телефону'
            onChange={this._handleField}
          />
        </div>
        <Submit onClick={() => this._sendForm()}>Замовити</Submit>
      </Container>
    );
  }
}

Confirmation.propTypes = {
  onShowPushUpNotification: PropTypes.func.isRequired,
  onHidePushUpNotification: PropTypes.func.isRequired,
}

export default Confirmation;
