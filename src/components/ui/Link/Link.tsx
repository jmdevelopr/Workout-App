import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import Text from '../Text';
import LinkStyled, { Underline } from './LinkStyled';

interface ILink {
  to: string;
  value: string;
}

export default function LinkComponent({ to, value }: ILink): ReactElement {
  const history = useHistory();
  const route = history.location.pathname;

  return (
    <LinkStyled to={to}>
      <Text typography="button" color="shade000">
        {value}
      </Text>
      {route === to && <Underline />}
    </LinkStyled>
  );
}
