import React, { ReactElement, useState } from 'react';
import { Text } from '../../components';
import MainView from '../MainView';

export default function CreateView(): ReactElement {
  const [workoutName, setWorkoutName] = useState('Workout name');
  const [workoutPlan, setWorkoutPlan] = useState([]);

  return (
    <MainView>
      <InputHeader typography="header" contentEditable suppressContentEditableWarning onChange={handleEditName}>
        {workoutName}
      </InputHeader>
    </MainView>
  );
}
