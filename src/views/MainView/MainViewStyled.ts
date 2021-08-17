import styled from 'styled-components';

export default styled.div(
  ({
    theme: {
      mainView: { height, borderRadius, backgroundColor, paddingBottom },
    },
  }) => `
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${height}px;
    background-color: ${backgroundColor};
    border-top-left-radius: ${borderRadius}px;
    border-top-right-radius: ${borderRadius}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${paddingBottom}px;
  `,
);

export const ScrollableElement = styled.div(
  ({
    theme: {
      mainView: {
        scrollable: { height },
      },
    },
  }) => `
    height: ${height}px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  `,
);
