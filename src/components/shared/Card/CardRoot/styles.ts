import styled from "styled-components";
import { CardRootProps } from ".";

type ContainerProps = Pick<CardRootProps, "size">;

const ENUM = {
  width: {
    small: "324px",
    medium: "608px",
    large: "608px",
    xl: "624px",
  },
  height: {
    small: "130px",
    medium: "192px",
    large: "280px",
    xl: "360px",
  },
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.size === "medium"
      ? props.theme["gray-600"]
      : props.theme["gray-700"]};
  max-width: ${({ size }) => ENUM.width[size]};
  width: 100%;
  max-height: ${({ size }) => ENUM.height[size]};
  height: 100%;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 20px 24px;

  display: ${({ size }) => size === "medium" && "flex"};

  &:hover {
    border: 2px solid ${(props) => props.theme["gray-500"]};
  }
`;
