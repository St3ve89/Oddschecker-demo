import styled from 'styled-components/macro';

export const Container = styled.div`
  /* padding: 24px; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 24px;
  background-color: #00182e;
  color: #ffffff;

  input {
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
  }
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  justify-content: center;
  max-width: 550px;
  margin-bottom: 24px;
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
  border-radius: 32px;
`;
