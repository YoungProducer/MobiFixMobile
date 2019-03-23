import posed from 'react-pose'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
    background-color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const StyledText = styled.h1`
    color: #000;
    font-size: 150%;
    width: 90%;
    text-align: center;
`

export const StyledForm = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`

export const InputFrame = posed.div({

})

export const StyledInputFrame = styled(InputFrame)`
    position: relative;
    width: 200px;
`

export const StyledInput = styled.input`
    height: 25px;
    width: 200px;
    outline: none;
    border: none;
    z-index: 1;
`

export const StyledPassiveLine = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #bbb;
    width: 100%;
    height: 1px;
    margin: auto;
`

export const ActiveLine = posed.div({
    init: {
        width: '0%',
        height: 0
    },
    active: {
        width: '100%',
        height: 2
    }
})

export const StyledActiveLine = styled(ActiveLine)`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: #DF564E;
`

export const Button = posed.button({
    init: { 
        backgroundColor: '#DF564E',
        transition: {
            duration: 400,
            type: 'tween'
        }
    },
    active: {
        backgroundColor: '#ff8726',
        transition: {
            duration: 400,
            type: 'tween'
        }
    }
})

export const StyledButton = styled(Button)`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #DF564E;
    color: #fff;
    outline: none;
`