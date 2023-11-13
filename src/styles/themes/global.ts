import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

:focus {
  outline: 0;
}

body {
  background-color: ${(props) => props.theme["gray-800"]};
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  color: ${(props) => props.theme["gray-100"]};

}

body, input,  button, textarea {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}
`;
