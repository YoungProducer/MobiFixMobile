import posed from 'react-pose'
import styled from 'styled-components'

export const Wrapper = posed.div({
    init: {
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    },
    visible: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    }
})

export const StyledWrapper = styled(Wrapper)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #55b559;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`

export const StyledText = styled.h2`
    color: #fff;
`

export const StyledGalc = styled.object`
    margin-left: 5px;
    height: 25px;
`