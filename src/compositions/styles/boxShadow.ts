export interface IShadow {
  hOffset: number;
  vOffset: number;
  blur: number;
  spread: number;
  color: string;
}
export const getBoxShadow = (shadow: IShadow): string =>
  `
    ${shadow.hOffset}px
    ${shadow.vOffset}px
    ${shadow.blur}px
    ${shadow.spread}px
    ${shadow.color}
  `;
