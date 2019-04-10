import React, { Component } from 'react'

import { Button } from './Cart.styled'

class Cart extends Component {
  render() {
    return <Button onClick={this.props.openCartModal}>кошик</Button>
  }
}

export default Cart
