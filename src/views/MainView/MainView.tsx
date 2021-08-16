import React from 'react';
import { Button, Text } from '../../components';
import MainViewStyled from './MainViewStyled';

export default function MainView(): JSX.Element {
  return (
    <MainViewStyled>
      <Text typography="textSmall" color="secondary100">
        Main View
      </Text>
      <Button>Button</Button>
    </MainViewStyled>
  );
}
