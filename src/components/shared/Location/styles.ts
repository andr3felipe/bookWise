import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-size: 2rem;

  > svg {
    color: ${(props) => props.theme["green-100"]};
  }
`;
