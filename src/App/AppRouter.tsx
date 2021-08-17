import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { HomeView, CreateView } from '../views';
import { HOME_VIEW, CREATE_VIEW } from '../endpoints';
import { Navbar } from '../components/content';

type TRoot = {
  key: string;
  component: RouteProps['component'];
  path: string;
  exact?: boolean;
};

export const roots: TRoot[] = [
  { key: 'home', component: HomeView, path: HOME_VIEW, exact: true },
  { key: 'create', component: CreateView, path: CREATE_VIEW, exact: true },
];

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
