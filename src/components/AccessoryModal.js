import React, { Component } from 'react'
import {
  Global,
  Container,
  Close,
  Header,
  Title,
  About,
  ImageWrapper,
  Image,
  ImagePickWrapper,
  ImagePicker,
  ColorPickWrapper,
  ColorPicker,
  AddToCart
} from './AccessoryModal.styled'
import { color } from 'style-value-types'

class Modal extends Component {
  constructor() {
    super()

    this.state = {
      currentImage: 0,
      currentColor: 0
    }
  }

  componentDidMount() {
    this.props.closeAccessoryModal()
  }

  _changeImage = e => {
    const { index } = e.target.dataset

    this.setState({ currentImage: parseInt(index) })
  }

  _changeColor = e => {
    const { index } = e.target.dataset

    this.setState({ currentColor: parseInt(index) })
  }

  _closeModal = () => {
    const { closeAccessoryModal } = this.props
    this.setState({ currentImage: 0, currentColor: 0 })
    closeAccessoryModal()
  }

  render() {
    const {
      visible,
      title,
      src,
      phone,
      images,
      price,
      haveColors,
      colors,
      closeAccessoryModal,
      addProduct
    } = this.props

    const { currentColor, currentImage } = this.state

    return (
      <Container pose={visible ? 'visible' : 'init'}>
        <Global active={visible} />
        <Header>
          <Title>{title}</Title>
          <Close onClick={this._closeModal}>
            <img src='./img/close.svg' width='20px' />
          </Close>
        </Header>
        <About>
          <p>{phone === null ? '––' : phone}</p>
          <p>${price}</p>
        </About>
        <ImageWrapper>
          <Image>
            <img src={images[currentColor][currentImage]} height='90%' />
          </Image>
          <ImagePickWrapper>
            {images[currentColor].map((image, index) => (
              <ImagePicker
                src={image}
                height='100%'
                key={index}
                data-index={index}
                active={currentImage === index}
                onClick={this._changeImage}
              />
            ))}
          </ImagePickWrapper>
        </ImageWrapper>
        <ColorPickWrapper>
          {haveColors &&
            colors.map(
              (color, index) =>
                color.length > 0 && (
                  <ColorPicker
                    key={index}
                    color={color[1]}
                    data-index={index}
                    onClick={this._changeColor}
                  />
                )
            )}
        </ColorPickWrapper>
        <AddToCart
          onClick={() =>
            addProduct(
              title,
              phone,
              haveColors ? colors[currentColor][1] : '#aaa',
              price
            )
          }
        >
          у кошик
        </AddToCart>
      </Container>
    )
  }
}

export default Modal
