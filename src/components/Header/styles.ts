import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  @media (width <= 800px) {
    height: auto;
  }
`;
