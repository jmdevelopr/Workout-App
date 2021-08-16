import styled, { createGlobalStyle } from 'styled-components';

// fonts must be included by @import ( fonts are linked in index.html file by <link /> ) https://github.com/styled-components/styled-components/issues/400
export default createGlobalStyle(
  ({
    theme: {
      color: { shade100: text, shade000: background },
    },
  }) => `
    html {
      font-size: 6.25%;
      font-family: noto-sans-jp-regular, sans-serif;
      body {
        margin: 0;
        padding: 0;
        color: ${text};
        background-color: ${background};
      }
    }
    * {
      box-sizing: border-box;
    }
  `,
);

export const ContentStyled = styled.div``;
