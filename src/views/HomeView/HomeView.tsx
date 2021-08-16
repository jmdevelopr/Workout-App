import React, { ReactElement } from 'react';
import { Button, Text } from '../../components';
import MainView from '../MainView';
import { Header, WorkoutPlan, PlanSection, ScrollableElement, WorkoutDetails } from './HomeViewStyled';
import { workoutPlans } from './workoutPlans';

interface IPlan {
  name: string;
  details: string;
}

export default function Home(): ReactElement {
  return (
    <MainView>
      <Header typography="header">Your plans</Header>
      <ScrollableElement>
        {workoutPlans.map((plan: IPlan) => (
          <WorkoutPlan>
            <PlanSection>
              <Text typography="textNormal">{plan.name}</Text>
              <WorkoutDetails typography="textSmall" color="secondary100">
                {plan.details.substr(0, 80)}...
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
