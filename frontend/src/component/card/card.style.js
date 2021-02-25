import styled from 'styled-components/macro';

export const CustomCard = styled.div`
  padding: 24px;
  display: flex;
  width: 450px;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgb(63 63 68 / 15%), 0 0 0 1px rgb(63 63 68 / 5%);
  border-radius: 8px;
  border: 0.5px solid #00182e;

  &:first-of-type {
    margin-bottom: 24px;
  }
`;
