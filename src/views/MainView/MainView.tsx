import React from 'react';
import { TChildren } from '../../types';
import MainViewStyled from './MainViewStyled';

interface IMainView {
  children: TChildren;
}

export default function MainView({ children }: IMainView): JSX.Element {
  return <MainViewStyled>{children}</MainViewStyled>;
}
