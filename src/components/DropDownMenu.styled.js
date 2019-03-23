import posed from 'react-pose'
import styled from 'styled-components'

export const List = posed.div({
    init: { 
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    },
    active: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    }
})

export const StyledList = styled(List)`
    position: absolute;
    background-color: #333;
    width: 100%;
    height: 100%;
    z-index: 1;
`