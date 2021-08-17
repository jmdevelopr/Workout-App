import styled from 'styled-components';

export interface IInputStyled {
  background?: boolean;
  header?: boolean;
  type?: string;
  width?: number;
}

export default styled.input<IInputStyled>(
  ({
    theme: {
      homeView: {
        header: { margin: headerMargin },
      },
      input: {
        backgroundColor,
        typography: { fontFamily, fontSize, lineHeight },
        typographyHeader: { fontFamily: fontFamilyHeader, fontSize: fontSizeHeader, lineHeight: lineHeightHeader },
        padding,
        borderRadius,
      },
    },
    background = false,
    header = false,
    type = 'text',
    width,
  }) => `
    background-color: ${background ? backgroundColor : 'transparent'};
    border: none;
    outline: none;
    padding: ${padding};
    font-family: ${header ? fontFamilyHeader : fontFamily};
    font-size: ${header ? fontSizeHeader : fontSize}px;
    line-height: ${header ? lineHeightHeader : lineHeight}px;
    border-radius: ${borderRadius}px;
    ${width ? `width: ${width}px;` : ''}
    ${header ? `text-align: center; margin: ${headerMargin};` : ''}
    ${type === 'number' ? 'text-align: center;' : ''}
  `,
);
