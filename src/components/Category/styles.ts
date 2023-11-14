import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme["purple-100"]};
  border: 1px solid ${(props) => props.theme["purple-100"]};
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme["purple-200"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  border-radius: 999px;
  padding: 4px 16px;
`;
