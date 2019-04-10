import styled, { createGlobalStyle } from 'styled-components'
import posed from 'react-pose'

const maxWidth = '360px'

export const ContainerPose = posed.div({
  init: {
    opacity: 0,
    applyAtEnd: { display: 'none' }
  },
  visible: {
    opacity: 1,
    applyAtStart: { display: 'flex' }
  }
})

export const Global = createGlobalStyle`
  body {
    height: 100vh;
    ${props => (props.active ? 'overflow: hidden' : 'overflow-x: hidden')};
  }
`

export const Container = styled(ContainerPose)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  overflow-y: hidden;
  flex-direction: column;
  z-index: 20;
`

export const Header = styled.div`
  width: calc(100% - 1.25em);
  padding-left: 1.25em;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const About = styled.div`
  width: calc(100% - 2.5em);
  padding: 0 1.25em;
  background: #f2f2f2;
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #333;
  font-size: 1em;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 0.9em;
    height: 2.5em;
  }
`

export const Title = styled.p`
  font-size: 1.15em;
  color: #333;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 0.9em;
  }
`

export const Close = styled.button`
  padding: 0 1.25em;
  height: 4em;

  & img {
    @media screen and (max-width: ${maxWidth}) {
      width: 0.8em;
      height: 0.8em;
    }
  }
`

export const ColorPickWrapper = styled.div`
  width: calc(100vw - 2.5em);
  padding: 0 1.25em;
  background: #fff;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ColorPicker = styled.div`
  width: 100%;
  margin: 0.25em;
  border-radius: 0.5em;
  height: 1em;
  background: ${props => props.color};
  opacity: 0.45;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 12em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${maxWidth}) {
    height: calc(100% - 10.5em);
  }
`

export const Image = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImagePickWrapper = styled.div`
  width: calc(100% - 2.5em);
  padding: 0 1.25em;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImagePicker = styled.img`
  display: block;
  margin: 0 0.5em;
  border-bottom: 2px solid ${props => (props.active ? '#f2f2f2' : '#fff')};
`

export const AddToCart = styled.button`
  width: 100%;
  height: 3em;
  border: none;
  background: #fff;
  color: #555;
  font-size: 1em;
  text-transform: uppercase;
  outline: none;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 0.9em;
  }
`
