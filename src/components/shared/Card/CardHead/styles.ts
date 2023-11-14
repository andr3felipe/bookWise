import styled from "styled-components";
import { CardHeadProps } from ".";

type ContainerProps = Pick<CardHeadProps, "size">;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-height: 48px;
  height: ${({ size }) => (size === "large" ? "100%" : "auto")};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ size }) => (size === "large" ? "32px" : "0px")};
`;
