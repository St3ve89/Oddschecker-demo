import styled from 'styled-components/macro';

export const CustomButton = styled.button`
  background: #1ed560;
  color: #00182e;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.1px;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-self: center;
  padding: 8px;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;

  &:active,
  &:focus,
  &:hover {
    outline: none;
  }

  &:hover {
    color: #ffffff;
    background-color: #167c3f;
  }
`;
