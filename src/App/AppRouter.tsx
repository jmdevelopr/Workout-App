import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

import { HomeView, CreateView, WorkoutView } from '../views';
import { HOME_VIEW, CREATE_VIEW, WORKOUT_VIEW } from '../endpoints';
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
  { key: 'workout', component: WorkoutView, path: WORKOUT_VIEW, exact: false },
];

export const mainRoots: TRoot[] = [];

export function mapRoots(rootsList: TRoot[]): JSX.Element[] {
  return rootsList.map(({ key, exact, path, component }) => (
    <Route key={key} path={path} component={component} exact={exact} />
  ));
}

export default function AppRouter(): JSX.Element {
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <>
      {(path === HOME_VIEW || path === CREATE_VIEW) && <Navbar />}
      {mapRoots(roots)}
    </>
  );
}
