import React, { Component } from 'react'

import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import Footer from './Footer'
import Accessory from '../containers/Accessory'
import AccessoryModal from '../containers/AccessoryModal'
import Cart from '../containers/Cart'
import CartModal from '../containers/CartModal'

import { Container } from './Accessories.styled'

const phones = {
  iphone_7: 'iPhone 7',
  iphone_7_plus: 'iPhone 7 Plus',
  iphone_8: 'iPhone 8',
  iphone_8_plus: 'iPhone 8 Plus',
  iphone_x: 'iPhone X',
  iphone_xs: 'iPhone XS',
  iphone_xs_max: 'iPhone XS Max',
  iphone_xr: 'iPhone XR'
}

const accessories = [
  {
    title: 'Аксесуари до iPhone',
    items: [
      {
        src: [
          [
            './img/brown_back_preview.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ],
          [
            './img/case.png',
            './img/SPACE_GRAY_BLUE_LEATHER_CASE_FRONT_BACK.jpg',
            './img/SPACE_GRAY_BLUE_LEATHER_CASE_FRONT.jpg'
          ],
          [
            './img/black_case.png',
            './img/black_f_b.jpg',
            './img/black_front.jpg'
          ]
        ],
        title: 'Шкіряний чехол',
        phone: phones.iphone_xs,
        price: '49.00',
        haveColors: true
      },
      {
        src: [
          [
            './img/main_ac.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'Силіконовий чехол',
        phone: phones.iphone_xs_max,
        price: '39.00',
        haveColors: true
      },
      {
        src: [
          [
            './img/xs_silicone_case.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'Силіконовий чехол',
        phone: phones.iphone_xs,
        price: '9999.00',
        haveColors: true
      },
      {
        src: [
          [
            './img/clear_case.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'Прозорий чехол',
        phone: phones.iphone_xr,
        price: '39.00',
        haveColors: false
      },
      {
        src: [
          [
            './img/smart_battery.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'Smart Battery Case',
        phone: phones.iphone_xs,
        price: '129.00',
        haveColors: true
      }
    ]
  },
  {
    title: 'AirPods',
    items: [
      {
        src: [
          [
            './img/airpods_2.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'AirPods 2',
        phone: null,
        price: '159.00',
        haveColors: false
      },
      {
        src: [
          [
            './img/airpods_with_wireless_charging.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'AirPods 2 з безпровідною зарядкою',
        phone: null,
        price: '199.00',
        haveColors: false
      },
      {
        src: [
          [
            './img/airpods_2_case.png',
            './img/brown_back_front.jpg',
            './img/brown_front.jpg'
          ]
        ],
        title: 'AirPods case з безпровідною зарядкою',
        phone: null,
        price: '79.00',
        haveColors: false
      }
    ]
  }
]

export default class Accessories extends React.Component {
  render() {
    return (
      <>
        <DropDownMenu />
        <Header />
        <Burger />
        <Container>
          {accessories.map((section, index) => (
            <div key={index}>
              {section.items.map((item, index) => (
                <Accessory
                  key={index}
                  title={item.title}
                  images={item.src}
                  phone={item.phone}
                  haveColors={item.haveColors}
                  price={item.price}
                />
              ))}
            </div>
          ))}
        </Container>
        <Cart />
        <AccessoryModal />
        <CartModal />
        <Footer />
      </>
    )
  }
}
