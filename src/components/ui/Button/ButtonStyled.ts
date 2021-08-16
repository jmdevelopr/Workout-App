import { HTMLProps } from 'react';
import styled from 'styled-components';
import { TChildren, TTheme } from '../../../types';
import { getBoxShadow } from '../../../compositions';

export const THEME_VARIANT = 'variants';

export type TVariant = keyof TTheme['button'];

interface IButtonProps {
  variant?: TVariant;
  children?: TChildren;
  disabled?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  color?: string;
  backgroundColor?: keyof TTheme['color'];
}

export interface IButton extends HTMLProps<HTMLButtonElement>, IButtonProps {}

interface IButtonStyled extends IButton {
  theme: TTheme;
}

export const DEFAULT_VARIANT = 'primary';

const getStyles = ({
  variant = DEFAULT_VARIANT,
  theme: { button, color: themeColors },
  bold = false,
  uppercase = false,
  disabled = false,
  color,
  backgroundColor: customBackgroundColor,
}: IButtonStyled): string => {
  const {
    [variant]: {
      typography: { fontFamily, fontFamilyBold, fontSize, lineHeight },
      color: colorInitial,
      backgroundColor: defaultBackroundColor,
      border,
      borderRadius,
      padding,
      shadow,
      marginRight,
      width,
      height,
      hover: { border: borderHover, backgroundColor: backgroundColorHover, shadow: shadowHover, color: colorHover },
      active: {
        color: colorActive,
        backgroundColor: backgroundColorActive,
        border: borderActive,
        shadow: shadowActive,
        fill: fillActive,
        borderRadius: borderRadiusActive,
        padding: paddingActive,
      },
    },
  } = button;

  const backgroundColor = customBackgroundColor ? themeColors[customBackgroundColor] : defaultBackroundColor;

  return `
      background-color: ${backgroundColor};
      color: ${colorInitial};
      padding: ${padding};
      border: ${border};
      border-radius: ${borderRadius};
      font-family: ${bold ? fontFamilyBold : fontFamily};
      font-size: ${fontSize}rem;
      line-height: ${lineHeight}rem;
      text-transform: ${uppercase ? 'uppercase' : 'none'};
      box-shadow: ${getBoxShadow(shadow)};
      cursor: pointer;
      display: flex;
      align-items: center;
      text-decoration: none;
      z-index: 1;
      width: ${width};
      height: ${height};
      svg {
        fill: ${color || 'white'};
        margin-right: ${marginRight}px;
        pointer-events: none;
      }
      &:hover {
        border: ${borderHover};
        background-color: ${backgroundColorHover};
        box-shadow: ${getBoxShadow(shadowHover)};
        color: ${colorHover};
        svg {
          fill: ${colorHover};
        }
      }
      &:active {
        background-color: ${backgroundColorActive};
        color: ${colorActive};
        border: ${borderActive};
        padding: ${paddingActive};
        box-shadow: ${disabled ? 'none' : getBoxShadow(shadowActive)};
        border-radius: ${borderRadiusActive};
        svg {
          fill: ${fillActive};
        }
      }
    `;
};

export const ButtonStyled = styled.button<IButton>(getStyles);

export const LinkStyled = styled.a<IButton>(getStyles);
