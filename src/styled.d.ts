import 'styled-components';
import { mainTheme } from './themes';

export type TTheme = typeof mainTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TTheme {}
}
// declare module 'styled-components' {
//   export type DefaultTheme = TTheme;
// }
