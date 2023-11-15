import styled from "styled-components";
import { InputProps } from ".";

type ContainerProps = Pick<InputProps, "width">;

export const Container = styled.div<ContainerProps>`
  border-radius: 4px;
  max-height: 48px;
  height: 100%;
  padding: 14px 20px;
  background-color: white;
  max-width: ${({ width }) => (width === "large" ? "624px" : "433px")};
  width: 100%;
  background-color: ${(props) => props.theme["gray-800"]};
  border: 1px solid ${(props) => props.theme["gray-500"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-out;

  &:focus-within {
    border-color: ${(props) => props.theme["green-200"]};

    > svg {
      color: ${(props) => props.theme["green-200"]};
    }
  }

  > svg {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-800"]};

  height: 20px;
  width: 100%;
  border: none;
  color: ${(props) => props.theme["gray-400"]};
`;
