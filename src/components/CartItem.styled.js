import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 1em;
  overflow: hidden;
`

export const Header = styled.div`
  width: calc(100% - 2.5em);
  padding: 1.25em 1.25em 0 1.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.p`
  width: ${props => (props.count ? '30%' : '70%')};
  text-align: ${props => (props.count ? 'right' : 'left')};
  color: #333;
  font-size: 0.9em;
`

export const SubHeader = styled.div`
  width: calc(100% - 2.5em);
  padding-top: 0.5em;
  padding-right: 1.25em;
  padding-left: 1.25em;
  padding-bottom: 1.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & p {
    color: ${lighten(0.5, '#000')};
    font-size: 0.8em;
  }
`

export const Controls = styled.div`
  width: calc(100% - 2.5em);
  padding: 0.75em 1.25em;
  background: ${props => lighten(0.25, props.color)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.5);
    display: block;

    @media screen and (max-width: '360px') {
      font-size: 0.75em;
    }
  }
`

export const AmountControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & p {
    font-size: 1.2em;
  }

  & p:first-child {
    margin-right: 1.25em;
  }

  & p:last-child {
    font-size: 0.9em;
    margin-left: 1.25em;
  }
`
