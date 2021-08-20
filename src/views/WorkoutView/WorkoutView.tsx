import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Timer } from '../../components';
import { IPlan } from '../../types';
import WorkoutViewStyled from './WorkoutViewStyled';

export interface IParams {
  id: string;
}

export default function WorkoutView(): ReactElement {
  const { id }: IParams = useParams();
  const [plan, setPlan] = useState<IPlan>();

  useEffect(() => {
    const workoutPlans = localStorage.getItem('workouts') || '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const workoutPlansArr: IPlan[] = workoutPlans !== '' ? JSON.parse(workoutPlans) : [];
    setPlan(workoutPlansArr.find((workoutPlan: IPlan) => workoutPlan.id === id));
  }, [id]);

  return (
    <WorkoutViewStyled>
      {plan && <Timer initialSeconds={plan.exercises[0].time} />}
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
    </WorkoutViewStyled>
  );
}
