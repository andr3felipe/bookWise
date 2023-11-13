import styled from "styled-components";

export const Container = styled.div``;

export const Text = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme["gray-300"]};
  max-width: 432px;
  width: 100%;
  height: 100%;

  @media (width <= 800px) {
    max-width: 140px;
  }
`;