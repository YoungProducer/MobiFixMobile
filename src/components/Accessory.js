import React, { Component } from 'react';
import Modal from '../containers/AccessoryModal';
import { getColorFromURL } from 'color-thief-node';
import {
  Container,
  Preview,
  Title,
  Image,
  Phone,
  Price,
  PriceBox
} from './Accessory.styled';

const rgbHex = require('rgb-hex');

export default class Accessory extends React.Component {
  state = {
    current: 0
  };

  render() {
    const {
      images,
      title,
      phone,
      price,
      openAccessoryModal,
      stock
    } = this.props;
    const { current } = this.state;

    return (
      <Container
        onClick={() => {
          openAccessoryModal(title, phone, price, images, stock);
        }}
      >
        <Image>
          <img src={images[0].urls[current]} />
        </Image>
        <Preview>
          <Title>{title}</Title>
          <PriceBox>
            {phone !== null && <Phone>{phone.name}</Phone>}
            <Price>${price}</Price>
          </PriceBox>
        </Preview>
      </Container>
    );
  }
}
