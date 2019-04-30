import React, { Component } from 'react';
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
} from './AccessoryModal.styled';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      currentColor: 0
    };
  }

  componentDidMount() {
    this.props.closeAccessoryModal();
  }

  _changeImage = e => {
    const { index } = e.target.dataset;

    this.setState({ currentImage: parseInt(index) });
  };

  _changeColor = e => {
    const { index } = e.target.dataset;

    this.setState({ currentColor: parseInt(index) });
  };

  _closeModal = () => {
    const { closeAccessoryModal } = this.props;
    this.setState({ currentImage: 0, currentColor: 0 });
    closeAccessoryModal();
  };

  render() {
    const {
      visible,
      title,
      phone,
      images,
      price,
      addProduct,
      stock
    } = this.props;

    const { currentColor, currentImage } = this.state;
    const { color } = images[currentColor];

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
          <p>{phone === null ? 'Універсальний' : phone.name}</p>
          <p>${price}</p>
        </About>
        <ImageWrapper>
          <Image>
            <img src={images[currentColor].urls[currentImage]} />
          </Image>
          <ImagePickWrapper>
            {images[currentColor].urls.map((image, index) => (
              <ImagePicker
                src={image}
                height='90%'
                key={index}
                data-index={index}
                active={currentImage === index}
                onClick={this._changeImage}
              />
            ))}
          </ImagePickWrapper>
        </ImageWrapper>
        <ColorPickWrapper>
          {images.map((item, index) => (
            <ColorPicker
              key={index}
              color={item.color.hex}
              data-index={index}
              onClick={this._changeColor}
            />
          ))}
        </ColorPickWrapper>
        {stock == true ? (
          <AddToCart
            onClick={() =>
              addProduct(
                title,
                phone.name,
                images[currentColor].color.hex,
                images[currentColor].color.name,
                price
              )
            }
          >
            у кошик
          </AddToCart>
        ) : (
          <AddToCart>Не в наявності</AddToCart>
        )}
      </Container>
    );
  }
}

export default Modal;
