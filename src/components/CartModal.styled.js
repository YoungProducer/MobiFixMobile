import styled, { createGlobalStyle } from 'styled-components';
import posed from 'react-pose';
import { lighten, darken } from 'polished';

const maxWidth = '360px';

const ContainerPose = posed.div({
  init: {
    opacity: 0,
    applyAtEnd: { display: 'none' }
  },
  visible: {
    opacity: 1,
    applyAtStart: { display: 'flex' }
  }
});

export const Global = createGlobalStyle`
  body {
    height: 100vh;
    ${props => (props.active ? 'overflow: hidden' : 'overflow-x: hidden')};
  }
`;

export const Container = styled(ContainerPose)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafa;
  overflow-y: hidden;
  flex-direction: column;
  display: flex;
  align-items: center;
  z-index: 20;
`;

export const Header = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  color: #555;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  width: calc(100% - 2.5em);
  padding: 0 1.25em calc(1.5em + 40px) 1.25em;
  height: 100%;
  overflow: scroll;
`;

export const Close = styled.button`
  padding-left: 2.5em;
  height: 100%;
  display: block;
  outline: none;
  border: none;
  background: transparent;
`;

export const Buttons = styled.div`
  width: calc(100% - 2.5em);
  display: flex;
  justify-content: space-between;
  padding: 1.25em 1.25em;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to top,
    #fff 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: fixed;
`;

export const Submit = styled.button`
  padding: 0 1.25em;
  line-height: 40px;
  border-radius: 20px;
  border: none;
  background: ${darken(0.025, '#eee')};
  font-size: 0.9em;
  outline: none;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const Total = styled.div`
  padding: 0 1.25em;
  line-height: 40px;
  border-radius: 20px;
  background: ${darken(0.025, '#eee')};
  color: #333;
  font-size: 0.9em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;
