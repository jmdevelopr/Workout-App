import styled from 'styled-components';

export const Form = styled.form``;

export const ExerciseStyled = styled.div(
  ({
    theme: {
      createView: {
        exercise: { padding, marginRight, marginBottom },
      },
    },
  }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${padding};
    & > * {
      &:nth-child(1) {
        margin-right: ${marginRight}px;
      }
    }
    &:not(:last-child) {
      margin-bottom: ${marginBottom}px;
    }
  `,
);
