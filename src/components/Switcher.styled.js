import posed from 'react-pose'
import styled from 'styled-components'

export const StyledInput = styled.input`
  display: none;
`

export const SwitcherBg = posed.label({
  active: {
    background: '#4CD562'
  },
  inactive: {
    background: '#ddd'
  }
})

export const StyledSwitcherBg = styled(SwitcherBg)`
  width: 50px;
  height: 26px;
  border-radius: 500px;
  display: block;
  position: relative;
`

export const SwitcherBtn = posed.div({
  active: {
    x: '24px',
    transition: {
      type: 'tween',
      duration: 300,
      ease: 'easeInOut'
    }
  },
  inactive: {
    x: '0px',
    transition: {
      type: 'tween',
      duration: 300,
      ease: 'easeInOut'
    }
  }
})

export const StyledSwitcherBtn = styled(SwitcherBtn)`
  background-color: #fff;
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  height: 20px;
  width: 20px;
  border-radius: 50px;
`
