import posed from 'react-pose'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 38px;
    padding-bottom: 10px;
`

export const StyledTextWrapper = styled.p`
    max-width: 130px;
`

export const StyledInfoBlocksWrapper = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: ${window.innerHeight < window.innerWidth ? 'row' : 'column'};;
    justify-content: space-around;
    align-items: center;
`

export const StyledInfoBlock = styled.div`
    width: ${window.innerHeight < window.innerWidth ? '40%' : '90%'};
    height: ${window.innerHeight < window.innerWidth ? '90%' : 'auto'};
    border-radius: 15px;
    padding: 5px;
    box-shadow: 0px 2px 5px 0px #878787;
    display: flex;
    flex-direction: ${window.innerHeight < window.innerWidth ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
`
