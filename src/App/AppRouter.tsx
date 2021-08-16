import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { HomeView } from '../views';
import { MAIN_VIEW } from '../endpoints';
import { Navbar } from '../components/content';

type TRoot = {
  key: string;
  component: RouteProps['component'];
  path: string;
  exact?: boolean;
};

export const roots: TRoot[] = [{ key: 'main', component: HomeView, path: MAIN_VIEW, exact: true }];

export const mainRoots: TRoot[] = [];

export function mapRoots(rootsList: TRoot[]): JSX.Element[] {
  return rootsList.map(({ key, exact, path, component }) => (
    <Route key={key} path={path} component={component} exact={exact} />
  ));
}

export default function AppRouter(): JSX.Element {
  return (
    <>
      <Navbar />
      {mapRoots(roots)}
    </>
  );
}
