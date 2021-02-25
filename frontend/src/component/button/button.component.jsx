import { CustomButton } from './button.style';

export const Button = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      <span>{children}</span>
    </CustomButton>
  );
};
