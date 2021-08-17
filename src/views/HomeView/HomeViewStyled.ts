import styled from 'styled-components';
import { Text } from '../../components';

export const Header = styled(Text)(
  ({
    theme: {
      homeView: {
        header: { margin },
      },
    },
  }) => `
    text-align: center;
    margin: ${margin};
    outline: none;
  `,
);

export const WorkoutPlan = styled.div(
  ({
    theme: {
      homeView: {
        workoutPlan: { height, padding, marginBottom },
      },
    },
  }) => `
    display: flex;
    justify-content: space-between;
    height: ${height}px;
    padding: ${padding};
    &:not(:last-child) {
      margin-bottom: ${marginBottom}px;
    }
  `,
);

export const PlanSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const WorkoutDetails = styled(Text)(
  ({
    theme: {
      homeView: {
        workoutDetails: { marginRight },
      },
    },
  }) => `
    margin-right: ${marginRight}px;
  `,
);
