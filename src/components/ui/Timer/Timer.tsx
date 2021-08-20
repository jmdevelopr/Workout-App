import React, { useState, useEffect, ReactElement } from 'react';
import Text from '../Text';
import TimerStyled from './TimerStyled';

export interface IProps {
  initialSeconds?: number;
  exercise: number;
  setExercise: React.Dispatch<React.SetStateAction<number>>;
  setInitialSeconds: () => number;
}

const Timer = ({ initialSeconds = 0, exercise, setExercise, setInitialSeconds }: IProps): ReactElement => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setExercise(exercise + 1);
        const time = setInitialSeconds();
        setSeconds(time);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <TimerStyled>
      {seconds === 0 ? null : (
        <Text typography="header" color="shade000">
          {seconds}
        </Text>
      )}
    </TimerStyled>
  );
};

export default Timer;
