import posed from 'react-pose'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 38px;
`

export const StyledTotalPriceWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const StyledInput = styled.input`
    width: 80%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
    margin-bottom: 30px;
    padding-left: 3px;
`

export const StyledButton = styled.button`
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-image: linear-gradient(to top, #0071ca, #399be7);
    color: #fff;
    margin-bottom: 40px;
`