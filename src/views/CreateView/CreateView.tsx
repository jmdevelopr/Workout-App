import React, { FormEvent, MouseEvent, ReactElement, useState } from 'react';
import { Button, Input } from '../../components';
import { IExercise } from '../../types';
import MainView, { ScrollableElement } from '../MainView';
import { ExerciseStyled, Form } from './CreateViewStyled';

function Exercise({ name, time }: IExercise): ReactElement {
  return (
    <ExerciseStyled>
      <Input value={name} background width={225} />
      <Input value={time} type="number" background width={70} />
    </ExerciseStyled>
  );
}

export default function CreateView(): ReactElement {
  const [workoutPlan, setWorkoutPlan] = useState<IExercise[]>([]);

  const addWorkout = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setWorkoutPlan([
      ...workoutPlan,
      {
        id: `exercisename${workoutPlan.length + 1}`,
        name: 'Exercise name',
        time: 0,
      },
    ]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputs = formElement.querySelectorAll('input');
    const [workoutName, ...exercises] = Array.from(inputs);

    const exercisesList = exercises.reduce<IExercise[]>((previousValue, currentValue, currentIndex, array) => {
      const name = currentValue.value;
      const time = parseFloat(array[currentIndex + 1].value);
      array.shift();
      return [...previousValue, { name, time }];
    }, []);

    const userWorkouts = localStorage.getItem('workouts') || '';

    if (userWorkouts !== '') {
      localStorage.setItem(
        'workouts',
        JSON.stringify([
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ...JSON.parse(userWorkouts),
          {
            name: workoutName.value,
            id: workoutName.value.toLowerCase().replace(/\s+/g, ''),
            exercises: exercisesList,
          },
        ]),
      );
    } else {
      localStorage.setItem(
        'workouts',
        JSON.stringify([
          {
            name: workoutName.value,
            id: workoutName.value.toLowerCase().replace(/\s+/g, ''),
            exercises: exercisesList,
          },
        ]),
      );
    }
  };

  return (
    <MainView>
      <Form onSubmit={handleSubmit}>
        <Input value="Workout name" header />
        <ScrollableElement>
          {workoutPlan.map(({ name, time, id }: IExercise) => (
            <Exercise name={name} time={time} key={id} />
          ))}
          <Button variant="quiet" onClick={addWorkout}>
            Add a new item
          </Button>
        </ScrollableElement>
        <Button>Save</Button>
      </Form>
    </MainView>
  );
}
