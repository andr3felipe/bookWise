import styled from "styled-components";
import { ButtonProps } from ".";

type ContainerProps = Pick<ButtonProps, "backgroundColor">;

export const Container = styled.button<ContainerProps>`
  color: ${(props) => props.theme["gray-200"]};
  background-color: ${(props) => props.theme[props.backgroundColor]};
  border: 2px solid ${(props) => props.theme["gray-800"]};
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 16px;
  font-size: 1.8rem;
  cursor: pointer;
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-500"]};
  }
`;
