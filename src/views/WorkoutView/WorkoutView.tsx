import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { IPlan } from '../../types';
import WorkoutViewStyled from './WorkoutViewStyled';

export interface IParams {
  id: string;
}

export default function WorkoutView(): ReactElement {
  const params: IParams = useParams();
  const workoutPlans = localStorage.getItem('workouts') || '';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const workoutPlansArr: IPlan[] = workoutPlans !== '' ? JSON.parse(workoutPlans) : [];
  const plan = workoutPlansArr.find((workoutPlan: IPlan) => workoutPlan.id === params.id);

  return (
    <WorkoutViewStyled>
      {plan &&
        plan.exercises.map(({ name, time }) => (
          <div>
            <p>{name}</p>
            <p>{time}</p>
          </div>
        ))}
    </WorkoutViewStyled>
  );
}
