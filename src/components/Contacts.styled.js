import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    margin-top: 20px;
    text-align: center;
  }

  p {
    padding: 8px;
    font-size: 1em;
    color: #777;

    &:nth-child(1) {
      color: #333;
      font-size: 1.1em;
    }

    a {
      color: #0070c9;
    }
  }
`;
