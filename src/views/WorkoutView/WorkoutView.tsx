import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Timer } from '../../components';
import { IPlan } from '../../types';
import WorkoutViewStyled from './WorkoutViewStyled';

export interface IParams {
  id: string;
}

export default function WorkoutView(): ReactElement {
  const { id }: IParams = useParams();
  const history = useHistory();
  const [plan, setPlan] = useState<IPlan>();
  const [exercise, setExercise] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(5);

  useEffect(() => {
    const workoutPlans = localStorage.getItem('workouts') || '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const workoutPlansArr: IPlan[] = workoutPlans !== '' ? JSON.parse(workoutPlans) : [];
    setPlan(workoutPlansArr.find((workoutPlan: IPlan) => workoutPlan.id === id));
    if (plan) {
      setInitialSeconds(plan.exercises[exercise].time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // useEffect(() => {
  //   setInitialSeconds(plan.exercises[exercise].time);
  // }, [exercise]);

  return (
    <WorkoutViewStyled>
      {plan && (
        <Timer
          initialSeconds={initialSeconds}
          exercise={exercise}
          setExercise={setExercise}
          setInitialSeconds={() => {
            if (plan.exercises[exercise] === undefined) {
              history.push('/');
              return 0;
            }
            const { time } = plan.exercises[exercise];
            setInitialSeconds(time);
            return time;
          }}
        />
      )}
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
    </WorkoutViewStyled>
  );
}
