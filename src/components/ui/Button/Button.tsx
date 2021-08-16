import React, { ReactElement } from 'react';
import { TTheme } from '../../../types';

import { IButton as ButtonInterface, DEFAULT_VARIANT, ButtonStyled } from './ButtonStyled';

interface IButtonAttrs {
  selected?: boolean;
  backgroundColor?: keyof TTheme['color'];
  className?: string;
}

export interface IButton extends ButtonInterface, IButtonAttrs {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
}

export default function Button({
  variant = DEFAULT_VARIANT,
  value,
  children,
  onClick,
  disabled,
  bold,
  uppercase,
  color,
  backgroundColor,
  className,
}: IButton): ReactElement {
  return (
    <ButtonStyled
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      bold={bold}
      uppercase={uppercase}
      color={color}
      backgroundColor={backgroundColor}
      className={className}
    >
      {children || value}
    </ButtonStyled>
  );
}
