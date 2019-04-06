import posed from 'react-pose'
import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
    width: 100%;
    height: 460px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
    position: relative;
`

export const StyledImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    background-size: cover;
`

export const StyledDescWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: calc(100% - 30px);
  height: 100px;
  padding: 15px;
`

export const StyledEclipse = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
`

export const StyledDescHeader = styled.h1`
  color: ${props => props.color || '#fff'};
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 150%;
`

export const StyledDate = styled.p`
  color: ${props => props.color || '#fff'};
`
