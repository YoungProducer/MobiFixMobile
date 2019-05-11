import React from 'react';
import { NavLink } from 'react-router-dom';
import PropsTypes from 'prop-types';

import {
  StyledWrapper,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledLinkText
} from './Footer.styled';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.usefp ? 'section fp-auto-height' : ''}>
          <StyledWrapper>
            <StyledList>
              <StyledListItem>
                <NavLink to='/accessories'>
                  <StyledLinkText>Аксесуари</StyledLinkText>
                </NavLink>
              </StyledListItem>

              <StyledListItem>
                <NavLink to='/feeds'>
                  <StyledLinkText>Необхдіно знати</StyledLinkText>
                </NavLink>
              </StyledListItem>

              <StyledListItem>
                <NavLink to='/contacts'>
                  <StyledLinkText>Контакти</StyledLinkText>
                </NavLink>
              </StyledListItem>

              <StyledListItem>
                <NavLink to='/accessories'>
                  <StyledLinkText>Гарантія</StyledLinkText>
                </NavLink>
              </StyledListItem>

              <StyledListItem>
                <NavLink to='/about'>
                  <StyledLinkText>Чому ми</StyledLinkText>
                </NavLink>
              </StyledListItem>
            </StyledList>

            <StyledList>
              <StyledListItem>{"Для зв'язку та питань"}</StyledListItem>

              <StyledListItem>
                <StyledLink href='tel:+380979696965'>
                  +38 (097) 96 96 96 5
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <StyledLink href='tel:+380639696965'>
                  +38 (063) 96 96 96 5
                </StyledLink>
              </StyledListItem>

              <StyledListItem>
                <span>Інстаграм </span>
                <StyledLink href='https://instagram.com/mobifix_te?utm_source=ig_profile_share&igshid=wjpr9vzwmx6b'>
                  mobifix_te
                </StyledLink>
              </StyledListItem>
            </StyledList>
          </StyledWrapper>
        </div>
      </>
    );
  }
}

Footer.propTypes = {
  usefp: PropsTypes.bool
};

export default Footer;
