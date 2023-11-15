import styled from "styled-components";

export const Container = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  padding-bottom: 20px;
  align-self: flex-end;
  cursor: pointer;

  > svg {
    color: ${(props) => props.theme["purple-100"]};
    background-color: ${(props) => props.theme["gray-600"]};
    border-radius: 4px;
    padding: 0px 8px;

    &:hover {
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }

  @media (width <= 1200px) {
    display: block;
  }
`;
