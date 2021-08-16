import styled from 'styled-components';
import { TTheme } from '../../../types';

export interface IText {
  typography?: keyof TTheme['typography'];
  bold?: boolean;
  uppercase?: boolean;
  color?: keyof TTheme['color'];
  className?: string;
}

interface IAttrs {
  className?: string;
}

export default styled.div.attrs<IAttrs>({})<IText>(
  ({
    typography: typographyName = 'textSmall',
    bold = false,
    uppercase = false,
    theme: { typography: typographyTheme, color: colorTheme },
    color,
  }) => {
    const {
      [typographyName]: { fontFamily, fontFamilyBold, fontSize, lineHeight },
    } = typographyTheme;

    return `
      font-family: ${bold ? fontFamilyBold : fontFamily};
      font-size: ${fontSize}rem;
      line-height: ${lineHeight}rem;
      text-transform: ${uppercase ? 'uppercase' : ''};
      ${color ? `color: ${colorTheme[color]};` : ''}
    `;
  },
);
