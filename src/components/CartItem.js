import React, { PureComponent } from 'react'
import {
  Container,
  Header,
  SubHeader,
  Controls,
  AmountControl,
  Text
} from './CartItem.styled'

class Item extends PureComponent {
  _changeCounter = e => {
    const { name } = e.target
    const { index, counter, onUpdateCart } = this.props

    let count = counter

    switch (name) {
      case 'add':
        count += 1
        onUpdateCart(index, count)
      case 'remove':
        count -= 1
        onUpdateCart(index, count)
      default:
        break
    }
  }

  render() {
    const {
      title,
      color,
      phone,
      price,
      counter,
      index,
      total,
      onRemoveProduct,
      onUpdateCart
    } = this.props

    return (
      <Container>
        <Header>
          <Text>{title}</Text>
          <Text count>{counter} шт.</Text>
        </Header>
        <SubHeader>
          <p>{phone === null ? 'Універсальний' : phone}</p>
          <p>${price}</p>
        </SubHeader>
        <Controls color={color}>
          <AmountControl>
            <p name='add' onClick={() => onUpdateCart(index, counter + 1)}>
              +
            </p>
            <p name='remove' onClick={() => onUpdateCart(index, counter - 1)}>
              -
            </p>
            <p>кількість</p>
          </AmountControl>
          <p onClick={() => onRemoveProduct(index)}>Видалити</p>
        </Controls>
      </Container>
    )
  }
}

export default Item
