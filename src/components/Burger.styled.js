import posed from 'react-pose'
import styled from 'styled-components'

export const Wrapper = posed.div({
    init: {
        x: 17,
    },
    slided: {
        x: window.innerWidth - 20 - 23,
    }
})

export const StyledWrapper = styled(Wrapper)`
    position: fixed;
    top: 10px;
    width: 20px;
    height: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 3px;
`

export const Stick = posed.div({
    init: { 
        applyAtStart: { display: 'block'},
        rotateZ: 0,
        y: 0
    },
    activetop: {
        rotateZ: 45,
        y: 5
    },
    activebottom: {
        rotateZ: -45,
        y: -5
    },
    active: {
        applyAtStart: { display: 'none'}
    }
})

export const StyledStick = styled(Stick)`
    width: 20px;
    height: 2px;
    background-color: #fff;
` 