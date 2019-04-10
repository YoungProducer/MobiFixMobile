import React, { Component } from 'react'
import {
  Global,
  Container,
  Header,
  Empty,
  Close,
  Items,
  Buttons,
  Total,
  Submit
} from './CartModal.styled'
import Item from '../containers/CartItem'
import Confirmation from './Confirmation'
class Modal extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    this.props.closeCartModal()
  }

  _total = () => {
    const { cart } = this.props
    let total = 0

    cart.map(item => {
      total += parseInt(item.price) * item.counter
    })

    return total
  }

  render() {
    const { visible, cart, closeCartModal } = this.props

    return (
      <Container pose={visible ? 'visible' : 'init'}>
        <Global active={visible} />
        <Items>
          <Header>
            <p>{cart.length !== 0 ? 'Кошик' : ''}</p>
            <Close onClick={closeCartModal}>
              <img src='./img/close.svg' width='16px' />
            </Close>
          </Header>
          {cart.length === 0 ? (
            <Empty>Кошик пустий</Empty>
          ) : (
            cart.map((item, id) => (
              <Item
                key={id}
                title={item.name}
                phone={item.phone}
                color={item.color}
                price={item.price}
                counter={item.counter}
                index={item.id}
              />
            ))
          )}
          <Buttons>
            <Total>${this._total()}</Total>
            <Submit>Замовити</Submit>
          </Buttons>
        </Items>
        <Confirmation />
      </Container>
    )
  }
}

export default Modal
