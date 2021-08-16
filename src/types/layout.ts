import { TNullable } from './common';

export interface ILayout {
  widgetBarType: TNullable<string>;
  isSubNavBarVisible: boolean;
  isPhone: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasInitializedScreenSize: boolean;
}
