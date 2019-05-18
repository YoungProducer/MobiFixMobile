import posed from 'react-pose'
import styled from 'styled-components'

export const ListWrapper = posed.div({
    lwInit: { 
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        },
        delay: 400
    },
    lwActive: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        }
    }
})

export const StyledListWrapper = styled(ListWrapper)`
    position: fixed;
    background-color: rgba(51, 51, 51, 0.8);
    width: 100%;
    height: 100%;
    z-index: 2;
`

export const List = posed.ul({
    listInit: {
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        },
        applyAtEnd: { display: 'none' }
    },
    listActive: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        },
        staggerChildren: 200,
        delayChildren: 400,
        applyAtStart: { display: 'flex' }
    }
})

export const MainListPosed = posed.ul({
    listInit: {
        y: '-100%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        },
        applyAtEnd: { display: 'none' }
    },
    listActive: {
        y: '0%',
        transition: {
            duration: 400,
            ease: 'easeInOut'
        },
        staggerChildren: 200,
        delayChildren: 400,
        applyAtStart: { display: 'block' }
    }
})

export const StyledList = styled(List)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: center;
`

export const MainList = styled(MainListPosed)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`


export const ListItem = posed.li({
    listInit: {
        opacity: 0,
        y: -20,
        applyAtEnd: { display: 'none' }
    },
    listActive: {
        opacity: 1,
        y: 0,
        applyAtStart: { display: 'block' }
    }
})

export const StyledListItem = styled(ListItem)`
    width: 70%;
    height: 30px;
    border-radius: 15px;
    background-color: #fff;
    list-style: none;
    line-height: 30px;
`


export const MainItem = styled(ListItem)`
    width: 70%;
    height: 30px;
    border-radius: 15px;
    background-color: #fff;
    list-style: none;
    line-height: 30px;
    margin-bottom: 30px;
`

export const StyledLink = styled.h5`
    color: #000;
    text-align: center;
`
