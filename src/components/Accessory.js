import React, { Component } from 'react'
import Modal from '../containers/AccessoryModal'
import { getColorFromURL } from 'color-thief-node'
import {
  Container,
  Preview,
  Title,
  Image,
  Phone,
  Price,
  PriceBox
} from './Accessory.styled'

const rgbHex = require('rgb-hex')

export default class Accessory extends React.Component {
  state = {
    current: 0,
    colors: [[]]
  }

  sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0
    } else {
      return a[0] < b[0] ? -1 : 1
    }
  }

  componentDidMount() {
    const { images } = this.props
    const { colors, current } = this.state

    images.map((color, index) => {
      getColorFromURL(color[0]).then(RGB => {
        this.setState(prevState => ({
          colors: [
            [index, `#${rgbHex(RGB[0], RGB[1], RGB[2])}`],
            ...prevState.colors
          ].sort(this.sortFunction)
        }))
      })
    })
  }

  render() {
    const {
      images,
      title,
      phone,
      price,
      haveColors,
      openAccessoryModal
    } = this.props
    const { current, colors } = this.state

    return (
      <Container
        onClick={() => {
          openAccessoryModal(title, phone, price, images, colors, haveColors)
        }}
      >
        <Image>
          <img src={images[0][current]} height='90%' />
        </Image>
        <Preview>
          <Title>{title}</Title>
          <PriceBox>
            {phone !== null && <Phone>{phone}</Phone>}
            <Price>${price}</Price>
          </PriceBox>
        </Preview>
      </Container>
    )
  }
}
