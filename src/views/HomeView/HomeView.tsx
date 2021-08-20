import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '../../components';
import { IExercise } from '../CreateView/CreateView';
import MainView, { ScrollableElement } from '../MainView';
import { WorkoutPlan, PlanSection, WorkoutDetails, Header } from './HomeViewStyled';

export interface IPlan {
  id: string;
  name: string;
  exercises: IExercise[];
}

const exercisesToDetails = (exercises: IExercise[]) => {
  const details = exercises.reduce((previousValue, currentValue) => {
    return `${previousValue} ${currentValue.name} ${currentValue.time} •`;
  }, '');

  return details.slice(0, -2);
};

export default function Home(): ReactElement {
  const workoutPlans = localStorage.getItem('workouts') || '';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const workoutPlansArr: IPlan[] = workoutPlans !== '' ? JSON.parse(workoutPlans) : [];

  return (
    <MainView>
      <Header typography="header">Your plans</Header>
      <ScrollableElement>
        {workoutPlans !== '' &&
          workoutPlansArr.map(({ id, name, exercises }: IPlan) => (
            <WorkoutPlan key={id}>
              <PlanSection>
                <Text typography="textNormal">{name}</Text>
                <WorkoutDetails typography="textSmall" color="secondary100">
                  {exercisesToDetails(exercises)}
                </WorkoutDetails>
              </PlanSection>
              <PlanSection>
                <Link to={`/${id}`}>
                  <Button>Train</Button>
                </Link>
                <Button>Edit</Button>
              </PlanSection>
            </WorkoutPlan>
          ))}
      </ScrollableElement>
    </MainView>
  );
}
