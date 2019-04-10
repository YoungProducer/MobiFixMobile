import React, { PureComponent } from 'react'
import {
  Container,
  Header,
  SubHeader,
  Controls,
  AmountControl
} from './CartItem.styled'

class Item extends PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: props.counter
  //   }

  //   this.counterChange = this.counterChange.bind(this)
  // }

  // componentDidUpdate() {
  //   this.setState({ count: this.props.counter })
  // }

  _changeCounter = e => {
    const { name } = e.target
    const { index, counter, onUpdateCart } = this.props

    let count = counter

    console.log(name)

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
          <p>{title}</p>
          <p>{counter} шт.</p>
        </Header>
        <SubHeader>
          <p>{phone}</p>
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
