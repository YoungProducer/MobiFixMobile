import posed from 'react-pose'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
    height: 100%;
    margin-bottom: 40px;
`

export const StyledContentWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* width: 100%; */}
    height: 100%;
    position: relative;
    top: 38px;
`

export const ShowMore = posed.p({
    init: {
        opacity: 1,
    },
    hide: {
        opacity: 0,
        applyAtStart: { display: 'none' }
    }
})

export const StyledShowMore = styled(ShowMore)`
    color: #000;
    text-align: center;
    margin-top: 20px;
`

export const ScrollToTopPosed = posed.div({
    init: {
        opacity: 1,
        applyAtStart: {
            display: 'flex'
        }
    },
    hide: {
        opacity: 0,
        applyAtEnd: {
            display: 'none'
        }
    }
})

export const SrollToTop = styled(ScrollToTopPosed)`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 999;
    background: #fff;
    position: fixed;
    bottom: 15px;
    right: 15px;
`