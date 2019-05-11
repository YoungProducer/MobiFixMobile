import React from 'react';

import Burger from '../containers/Burger';
import DropDownMenu from '../containers/DropDownMenu';
import Header from './Header';
import Footer from './Footer';

import { Container } from './Contacts.styled';

export default () => (
  <>
    <Header />
    <DropDownMenu />
    <Burger />
    <Container>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.4235396969225!2d25.591990515623174!3d49.55203115956948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473036b37d32aa9f%3A0x2df64a3aa11e3e34!2sHet&#39;mana+Sahaidachnoho+St%2C+1%2C+Ternopil%2C+Ternopil&#39;s&#39;ka+oblast%2C+46002!5e0!3m2!1sen!2sua!4v1557554023632!5m2!1sen!2sua'
        width='80%'
        height='80%'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen
      />
      <div>
        <p>Для зв'язку та питань</p>
        <p>+38 (097) 96 96 96 5</p>
        <p>+38 (063) 96 96 96 5</p>
        <p>
          Instagram:{' '}
          <a href='https://instagram.com/mobifix_te?utm_source=ig_profile_share&igshid=wjpr9vzwmx6b'>
            mobifix_te
          </a>
        </p>
      </div>
    </Container>
    <Footer />
  </>
);
