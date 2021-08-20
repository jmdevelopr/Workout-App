import React, { useState, useEffect, ReactElement } from 'react';
import Text from '../Text';
import TimerStyled from './TimerStyled';

export interface IProps {
  initialMinute?: number;
  initialSeconds?: number;
}

const Timer = ({ initialMinute = 0, initialSeconds = 0 }: IProps): ReactElement => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <TimerStyled>
      {minutes === 0 && seconds === 0 ? null : (
        <Text typography="header" color="shade000">
          {' '}
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </TimerStyled>
  );
};

export default Timer;
