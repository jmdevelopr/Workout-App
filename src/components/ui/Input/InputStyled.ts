import styled from 'styled-components';

export interface IInputStyled {
  background?: boolean;
  header?: boolean;
}

export default styled.input<IInputStyled>(
  ({
    theme: {
      input: {
        backgroundColor,
        typography: { fontFamily, fontSize, lineHeight },
        typographyHeader: { fontFamily: fontFamilyHeader, fontSize: fontSizeHeader, lineHeight: lineHeightHeader },
        padding,
      },
    },
    background = false,
    header = false,
  }) => `
    background-color: ${background ? backgroundColor : 'transparent'};
    border: none;
    outline: none;
    padding: ${padding};
    font-family: ${header ? fontFamilyHeader : fontFamily};
    font-size: ${header ? fontSizeHeader : fontSize}px;
    line-height: ${header ? lineHeightHeader : lineHeight}px;
    ${header ? 'text-align: center;' : ''}
  `,
);
