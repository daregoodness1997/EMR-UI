import React from 'react';
import { Button as CustomButton } from '../styles';
import { ButtonProps } from './BaseButton';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
