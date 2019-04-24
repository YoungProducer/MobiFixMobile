import React, { Component } from 'react';
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
    const { cart, pushUpNotification } = this.props;

    axios.post('', {
      name,
      phone,
      cart
    }); // Add then with push up after POST req.
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

export default Confirmation;
