import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["gray-700"]};
  max-width: 608px;
  width: 100%;
  max-height: 280px;
  height: 100%;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 20px 24px;

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-500"]};
  }
`;
