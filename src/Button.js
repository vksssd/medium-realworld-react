// src/Button.js
import React from 'react';
import { Button as ShadcnButton } from '@shadcn/ui';

const Button = ({ children, ...rest }) => {
  return <ShadcnButton {...rest}>{children}</ShadcnButton>;
};

export default Button;
