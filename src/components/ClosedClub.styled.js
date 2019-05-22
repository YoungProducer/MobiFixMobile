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

export const Info = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #ccd0d2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    box-sizing: border-box;
`

const InfoBlockPosed = posed.div({
    init: {
        opacity: 0,
        applyAtEnd: { display: 'none' },
    },
    active: {
        opacity: 1,
        applyAtStart: { display: 'block' },
    }
})

export const InfoBlock = styled(InfoBlockPosed)`
    position: absolute;
    padding: 10px;
    top: 45px;
    left: 10px;
    right: 10px;
    z-index: 100;
    background-color: #fff;
    color: #000;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, .5);

    p {
        line-height: 20px;
    }
`