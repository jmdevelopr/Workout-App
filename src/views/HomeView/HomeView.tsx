import React, { ReactElement } from 'react';
import { Button, Text } from '../../components';
import { IExercise } from '../CreateView/CreateView';
import MainView, { ScrollableElement } from '../MainView';
import { WorkoutPlan, PlanSection, WorkoutDetails, Header } from './HomeViewStyled';

interface IPlan {
  name: string;
  details: IExercise[];
}

export default function Home(): ReactElement {
  const workoutPlans = localStorage.getItem('workouts') || '';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const workoutPlansArr: IPlan[] = workoutPlans !== '' ? JSON.parse(workoutPlans) : [];

  return (
    <MainView>
      <Header typography="header">Your plans</Header>
      <ScrollableElement>
        {workoutPlans !== '' &&
          workoutPlansArr.map((plan: IPlan) => (
            <WorkoutPlan>
              <PlanSection>
                <Text typography="textNormal">{plan.name}</Text>
                <WorkoutDetails typography="textSmall" color="secondary100">
                  Details
                </WorkoutDetails>
              </PlanSection>
              <PlanSection>
                <Button>Train</Button>
                <Button>Edit</Button>
              </PlanSection>
            </WorkoutPlan>
          ))}
      </ScrollableElement>
    </MainView>
  );
}
