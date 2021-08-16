import { Dispatch } from 'react';
import { EmptyObject, Store } from 'redux';
import { ITokens } from './auth';
import { TNullable, TObject } from './common';

export type TStore = Store<EmptyObject & { layoutReducer: ILayout; authReducer: ITokens }, ActionPayloadLayout> & {
  dispatch: unknown;
};

export interface ILayout {
  widgetBarType: TNullable<string>;
  isSubNavBarVisible: boolean;
  isPhone: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasInitializedScreenSize: boolean;
}

export interface IPayloadLayout {
  widgetBarType?: ILayout['widgetBarType'];
  isSubNavBarVisible?: ILayout['isSubNavBarVisible'];
  isPhone?: ILayout['isPhone'];
  isMobile?: ILayout['isMobile'];
  isTablet?: ILayout['isTablet'];
  isDesktop?: ILayout['isDesktop'];
  hasInitializedScreenSize?: ILayout['hasInitializedScreenSize'];
}

export interface IPayloadToken {
  tokenType: string;
  token: string;
}

export interface ActionPayloadLayout extends IPayloadLayout {
  type: string | TObject<boolean>;
}

export interface ActionPayloadToken extends IPayloadToken {
  type: string;
}

export interface ActionPayloadEmpty {
  type: string;
}

export interface RootState {
  layoutReducer: ILayout;
  authReducer: ITokens;
}

export type TDispatch<T> = Dispatch<T>;
