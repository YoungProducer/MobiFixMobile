import React, { Component } from 'react';
import axios from 'axios';

import Burger from '../containers/Burger';
import DropDownMenu from '../containers/DropDownMenu';
import Header from './Header';
import Footer from './Footer';
import Accessory from '../containers/Accessory';
import AccessoryModal from '../containers/AccessoryModal';
import Cart from '../containers/Cart';
import CartModal from '../containers/CartModal';
import PushUpNotification from '../containers/PushUpNotification';

import { Container } from './Accessories.styled';

export default class Accessories extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.mobifix.tech/accessories')
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    
    return (
      <>
        <PushUpNotification />
        <DropDownMenu />
        <Header />
        <Burger />
        <Container>
          {data.map((item, index) => (
            <Accessory
              key={index}
              title={item.name}
              images={item.photos}
              phone={item.phone}
              price={item.price}
              stock={item.is_available}
            />
          ))}
        </Container>
        <Cart />
        <AccessoryModal />
        <CartModal />
        <Footer />
      </>
    );
  }
}
