import posed from 'react-pose'
import styled from 'styled-components'

export const Eclipse = posed.div({
    init: {
        opacity: 0,
        applyAtEnd: { display: 'none' }
    },
    visible: {
        opacity: 0.5,
        applyAtStart: { display: 'block' }
    }
})

export const StyledEclipse = styled(Eclipse)`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
`

export const Wrapper = posed.div({
    init: {
        applyAtEnd: { display: 'none' },
        opacity: 0,
        transition: {
            duration: 100
        },
        delay: 200
    },
    visible: {
        applyAtStart: { display: 'flex' },
        opacity: 1,
        transition: {
            duration: 100
        }
    }
})

export const StyledWrapper = styled(Wrapper)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    overflow: hidden;

`

export const ContentWrapper = posed.div({
    init: {
        applyAtEnd: { display: 'none' },
        height: 20,
        transition: {
            duration: 400
        }
    },
    visible: {
        applyAtStart: { display: 'flex' },
        height: window.innerHeight - window.innerHeight * 10 / 100,
        transition: {
            delay: 200,
            duration: 400
        }
    }
})

export const StyledContentWrapper = styled(ContentWrapper)`
    width: 90%;
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(0,0,0,0.1);
    border-radius: 10px;
    position: relative;
    overflow: auto;
`

export const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const StyledClose = styled.div`
    cursor: pointer;
    width: 15px;
    height: 15px;
    text-align: center;
    fill: #eee;
    position: absolute;
    top: 15px;
    right: 15px;
`

export const StyledHeader = styled.h1`
    color: #000;
    font-weight: 600;
    margin-bottom: 30px;
    max-width: 80%;
    font-size: 120%;
    text-align: center;
`

export const StyledImage = styled.img`
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 30px;
`

export const StyledText = styled.p`
    color: #000;
    margin-top: 30px;
    max-width: 80%;
    font-size: 120%;
    line-height: 36px;
    font-weight: 300;
    padding-right: 10px;
    padding-left: 10px;
    text-align: justify;
`

export const StyledDate = styled.p`
    color: #000;
    margin-top: 30px;
`


