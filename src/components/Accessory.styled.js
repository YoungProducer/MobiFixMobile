import styled from 'styled-components'

const maxWidth = '360px'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 120vw;
  width: 90vw;

  background: #f2f2f2;
  color: #333;

  margin-bottom: 0.75em;
  border-radius: 1.25em;

  overflow: hidden;
  position: relative;

  &:first-child {
    margin-top: 3.5em;

    @media screen and (max-width: ${maxWidth}) {
      margin-top: 3em;
    }
  }
`

export const Image = styled.div`
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.15));
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Preview = styled.div`
  height: 20%;
  width: calc(100% - 60px);
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 0;
`

export const Title = styled.p`
  font-size: 1.5em;
  color: #333;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 1em;
  }
`

export const PriceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0.5em;
`

export const Phone = styled.p`
  font-size: 1em;
  color: #777;
  margin-right: 0.5em;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 0.75em;
  }
`

export const Price = styled.p`
  font-size: 1em;
  color: #777;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 0.75em;
  }
`
