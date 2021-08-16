import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)(
  ({
    theme: {
      link: { padding },
    },
  }) => `
    position: relative;
    text-decoration: none;
    text-align: center;
    padding: ${padding};
  `,
);

export const Underline = styled.div(
  ({
    theme: {
      link: {
        underline: { height, backgroundColor },
      },
    },
  }) => `
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${height}px;
    background-color: ${backgroundColor};
  `,
);
