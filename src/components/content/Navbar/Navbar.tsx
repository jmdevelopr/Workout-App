import React, { ReactElement } from 'react';
import { Link } from '../../ui';

import NavbarStyled from './NavbarStyled';

export default function Navbar(): ReactElement {
  return (
    <NavbarStyled>
      <Link to="/" value="Workout plans" />
      <Link to="/create" value="Create a workout" />
    </NavbarStyled>
  );
}
