import styled from 'styled-components';
import { Text } from '../../components';

export const Header = styled(Text)`
  text-align: center;
  margin: 30px 0 40px;
  outline: none;
`;

export const ScrollableElement = styled.div`
  height: 480px;
  overflow-y: scroll;
`;

export const WorkoutPlan = styled.div(
  ({
    theme: {
      homeView: {
        plan: { height },
      },
    },
  }) => `
    display: flex;
    justify-content: space-between;
    height: ${height}px;
    padding: 0 30px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  `,
);

export const PlanSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const WorkoutDetails = styled(Text)`
  margin-right: 16px;
`;
