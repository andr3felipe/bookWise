import styled from "styled-components";
import { CardHeadProps } from ".";

type ContainerProps = Omit<CardHeadProps, "children">;

const ENUM = {
  width: {
    small: "100%",
    medium: "100%",
    large: "100%",
    xl: "576px",
  },
  height: {
    small: "auto",
    medium: "auto",
    large: "100%",
    xl: "134px",
  },
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-height: ${({ size }) => (size === "xl" ? ENUM.height[size] : "48px")};
  height: ${({ size }) => ENUM.height[size]};

  gap: ${({ gap }) => `${gap}px`};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ size }) => (size === "large" ? "32px" : "0px")};
`;
