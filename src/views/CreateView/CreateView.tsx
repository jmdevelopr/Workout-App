import React, { ReactElement, useState } from 'react';
import { Button, Input } from '../../components';
import MainView from '../MainView';
import { ExerciseStyled } from './CreateViewStyled';

interface IExercise {
  name: string;
  time: number;
}

function Exercise({ name, time }: IExercise): ReactElement {
  return (
    <ExerciseStyled>
      <Input value={name} />
      <Input value={time} type="number" />
    </ExerciseStyled>
  );
}

export default function CreateView(): ReactElement {
  const [workoutPlan, setWorkoutPlan] = useState<IExercise[]>([]);

  const addWorkout = () => {
    setWorkoutPlan([
      ...workoutPlan,
      {
        name: 'Exercise name',
        time: 0,
      },
    ]);
  };

  return (
    <MainView>
      <Input value="Workout name" />
      {workoutPlan.map(({ name, time }: IExercise) => (
        <Exercise name={name} time={time} />
      ))}
      <Button onClick={addWorkout}>Add a new item</Button>
    </MainView>
  );
}
