import styled from "styled-components";
import { CardRootProps } from ".";

type ContainerProps = Pick<CardRootProps, "size">;

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme["gray-700"]};
  max-width: ${({ size }) => (size === "large" ? "608px" : "324px")};
  width: 100%;
  max-height: ${({ size }) => (size === "large" ? "280px" : "130px")};
  height: 100%;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 20px 24px;

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-500"]};
  }
`;
