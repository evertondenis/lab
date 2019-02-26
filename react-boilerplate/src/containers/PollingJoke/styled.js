import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;

  p {
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
  }

  a {
    color: tomato;
    display: block;
    padding: 10px 0;
  }
`;

export const ContainerActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  border-radius: 25px;
  border: 1px solid rgba(255, 99, 71, 1);
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  margin: 10px;
  padding: 5px 12px;
`;
